const express = require('express');
const { check, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const Transaction = require('../../models/Transaction');

const router = express.Router();

let dateNow = new Date();

// @route   POST api/transaction
// @desc    Transaction route
// @access  Public
router.post('/', [
    check('transaction_title','A title for transaction is required.')
        .not()
        .isEmpty(),
    check('transaction_amount','Amount is required.')
        .not()
        .isEmpty()
        .isDecimal()
], async (req,res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { transaction_title, transaction_amount, transaction_status, transaction_type } = req.body;

    try {
        
    } catch (error) {
        
    }

});

module.exports = router