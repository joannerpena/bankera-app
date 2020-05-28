const express = require('express');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const router = express.Router();

const Account = require('../../models/Account');
const User = require('../../models/User');

// @route   GET api/account/me
// @desc    Get User Account
// @access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const account = await Account.findOne({
      user: req.user.id,
    }).populate('user', ['first_name', 'last_name', 'avatar']);

    if (!account) {
      return res.status(400).json({
        msg: 'There is no account for this user',
      });
    }

    res.json(account);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error!');
  }
});

// @route   POST api/account
// @desc    Create or Update User Account
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('birth_date', 'Date of Birth is required.').not().isEmpty(),
      check('address1', 'Address is required.').not().isEmpty(),
      check('state', 'State is required.')
        .not()
        .isEmpty()
        .isAlpha()
        .isLength({ min: 2, max: 2 }),
      check('zipcode', 'Zipcode is required.')
        .not()
        .isEmpty()
        .isDecimal()
        .isLength({ min: 5, max: 5 }),
      check('ssn', 'SSN is required.').not().isEmpty().isDecimal(),
      check('phone_number', 'Phone Number is required.')
        .not()
        .isEmpty()
        .isDecimal()
        .isLength({ min: 10 }),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
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
      phone_number,
      phone_optional,
    } = req.body;

    // Build Account Object
    const accountFields = {};
    accountFields.user = req.user.id;
    accountFields.account_type = account_type;
    accountFields.birth_date = birth_date;
    accountFields.address1 = address1;
    accountFields.city = city;
    accountFields.state = state;
    accountFields.zipcode = zipcode;
    accountFields.us_citizenship = us_citizenship;
    accountFields.ssn = ssn;
    accountFields.cardColor = cardColor;
    accountFields.phone_number = phone_number;

    if (address2) accountFields.address2 = address2;
    if (driver_license) accountFields.driver_license = driver_license;
    if (license_dueDate) accountFields.license_dueDate = license_dueDate;
    if (phone_optional) accountFields.phone_optional = phone_optional;

    try {
      let account = await Account.findOne({ user: req.user.id });

      if (account) {
        // Update account
        account = await Account.findOneAndUpdate(
          { user: req.user.id },
          { $set: accountFields },
          { new: true }
        );

        return res.json(account);
      }

      // Create Account
      account = new Account(accountFields);

      await account.save();
      res.json(account);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   DELETE api/account
// @desc    Delete User Account
// @access  Private
router.delete('/', auth, async (req, res) => {
  try {
    // @todo - remove users transaction
    // Remove Account and User
    await Account.findOneAndRemove({ user: req.user.id });
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'User deleted' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error!');
  }
});

module.exports = router;
