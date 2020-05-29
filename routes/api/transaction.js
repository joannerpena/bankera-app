const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const router = express.Router();

const Transaction = require('../../models/Transaction');
const Account = require('../../models/Account');
const User = require('../../models/User');

// @route   POST api/transaction
// @desc    Create Transaction
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('transaction_title', 'Title is required.').not().isEmpty(),
      check('transaction_amount', 'Amount is required.')
        .not()
        .isEmpty()
        .isDecimal(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      transaction_title,
      transaction_amount,
      transaction_type,
    } = req.body;

    const newTransaction = {};

    newTransaction.user = req.user.id;
    newTransaction.transaction_title = req.body.transaction_title;
    newTransaction.transaction_amount = req.body.transaction_amount;
    newTransaction.transaction_type = req.body.transaction_type;

    try {
      const transaction = new Transaction(newTransaction);

      await transaction.save();
      res.json(transaction);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error!');
    }
  }
);

// @route   GET api/transaction
// @desc    Get All Transaction
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id }).sort({
      transaction_date: -1,
    });

    res.json(transactions);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error!');
  }
});

module.exports = router;
