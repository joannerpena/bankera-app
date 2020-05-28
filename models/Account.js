const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  account_type: {
    type: String,
    required: true,
  },
  birth_date: {
    type: Date,
    required: true,
  },
  address1: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  us_citizenship: {
    type: Boolean,
    required: true,
  },
  ssn: {
    type: String,
    required: true,
  },
  driver_license: {
    type: String,
  },
  license_dueDate: {
    type: Date,
  },
  cardColor: {
    type: Number,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  phone_optional: {
    type: String,
  },
});

module.exports = Account = mongoose.model('account', AccountSchema);
