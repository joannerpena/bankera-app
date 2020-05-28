const mongoose = require('mongoose');
const accountGenerator = require('../utils/accountgenerator');

const dateNow = new Date();
const accountNumber = accountGenerator();

const UserSchema = new mongoose.Schema({
  account_number: {
    type: String,
    default: accountNumber,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
  },
  filled_date: {
    type: Date,
    default: dateNow,
  },
});

module.exports = User = mongoose.model('user', UserSchema);
