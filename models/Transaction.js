const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dateNow = new Date.now();

const TransactionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  transaction_title: {
    type: String,
    required: true,
  },
  transaction_amount: {
    type: Number,
    required: true,
  },
  transaction_status: {
    type: String,
  },
  transaction_type: {
    type: String,
  },
  transaction_date: {
    type: Date,
    Default: dateNow,
  },
});

module.exports = Transaction = mongoose.model('transaction', TransactionSchema);
