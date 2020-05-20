const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post('/', [
    check('first-name','First name is required.')
        .not()
        .isEmpty(),
    check('last-name','Last name is required.')
        .not()
        .isEmpty(),
    check('birth_date','Please introduce a valid Date.')
        .isISO8601()
        .toDate(),
    check('city','Introduce a valid city.')
        .isAlpha(),
    check('state','Only 2 characters for State.')
        .isLength({ min: 2, max: 2 }),
    check('zipcode','Zipcode must be 6 characters.')
        .isDecimal()
        .isLength({ min: 5, max: 5 }),
    check('ssn','Please introduce your Social Security Number.')
        .not()
        .isEmpty()
        .isLength({ min: 10 }),
    check('user_name','Please introduce a username.')
        .not()
        .isEmpty(),
    check('email','Please include a valid email.')
        .normalizeEmail()
        .isEmail(),
    check('password','Password must be at least 8 characters.')
        .isLength({ min: 8 }),
    check('phone_number','We need a number where to contact you.')
        .not()
        .isEmpty()
        .isMobilePhone()
        .isLength({ min: 8 })
], (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    res.send("User route");
})

module.exports = router