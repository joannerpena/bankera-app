const mongoose = require('mongoose');
const accountGenerator = require('../utils/accountgenerator');

const dateNow = new Date();
const accountNumber = accountGenerator();

const UserSchema = new mongoose.Schema({
    account_number: {
        type: String,
        default: accountNumber,
        unique: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true,
    },
    account_type: {
        type: String,
        required: true
    },
    birth_date: {
        type: Date,
        required: true
    },
    address1: {
        type: String,
        required: true
    },
    address2:{
        type: String
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    us_citizenship: {
        type: Boolean,
        required: true
    },
    ssn: {
        type: String,
        required: true
    },
    driver_license:{
        type: String
    },
    license_dueDate: {
        type: Date
    },
    cardColor: {
        type: Number,
        required: true
    },
    user_name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone_number: {
        type: String,
        required: true
    },
    phone_optional: {
        type: String
    },
    avatar: {
        type: String
    },
    filled_date: {
        type: Date,
        default: dateNow
    }
});

module.exports = User = mongoose.model('user', UserSchema);