const express = require('express');
const { check, validationResult } = require('express-validator');
const config = require('config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const User = require('../../models/User');

const router = express.Router();

// @route   GET api/auth
// @desc    Auth route
// @access  Public
router.get('/', auth, async (req,res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error!')
    }
});

// @route   POST api/auth
// @desc    Authenticate User & Get Token
// @access  Public
router.post('/', [
    check('user_name','Please introduce a valid username.')
        .not()
        .isEmpty(),
    check('password','Password is required.')
        .exists()
], async (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { user_name, password } = req.body;

    try {
        // Check for the user
        let user = await User.findOne({ user_name });

        if(!user){
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({ error: [{ msg: 'Invalid Credentials' }] });
        }

        // Return jsonwebtoken
        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 },
            (err, token) => {
                if(err) throw err;
                res.json({ token });
            });

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error!');
    }
})

module.exports = router