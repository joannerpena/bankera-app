const express = require('express');
const { check, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../models/User');

const router = express.Router();

let dateNow = new Date();

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post(
  '/',
  [
    check('first_name', 'First name is required.').not().isEmpty(),
    check('last_name', 'Last name is required.').not().isEmpty(),
    check('user_name', 'Please introduce a username.').not().isEmpty(),
    check('email', 'Please include a valid email.').normalizeEmail().isEmail(),
    check('password', 'Password must be at least 8 characters.').isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      account_number,
      first_name,
      last_name,
      account_type,
      birth_date,
      address1,
      address2,
      city,
      state,
      zipcode,
      us_citizenship,
      ssn,
      driver_license,
      license_dueDate,
      cardColor,
      user_name,
      password,
      email,
      phone_number,
      phone_optional,
      avatar,
      filled_date,
    } = req.body;

    try {
      // Check if the user exists
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({
          errors: [{ msg: 'Email already registered with another account' }],
        });
      }

      // Get user avatar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm',
      });

      // Create new user
      user = new User({
        account_number,
        first_name,
        last_name,
        account_type,
        birth_date,
        address1,
        address2,
        city,
        state,
        zipcode,
        us_citizenship,
        ssn,
        driver_license,
        license_dueDate,
        cardColor,
        user_name,
        password,
        email,
        phone_number,
        phone_optional,
        avatar,
        filled_date,
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error!');
    }
  }
);

module.exports = router;
