const mongoose = require('mongoose');

const dateNow = new Date.now();

const TransactionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    transaction_title: {
        type: String
    },
    transaction_amount: {
        type: Number
    },
    transaction_status: {
        type: String
    },
    transaction_type: {
        type: String
    },
    transaction_date: {
        type: Date,
        Default: dateNow
    }
});

module.exports = Transaction = mongoose.model('transaction', TransactionSchema);