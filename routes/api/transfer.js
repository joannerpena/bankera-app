const express = require('express');
const router = express.Router();

// @route   GET api/transfer
// @desc    Test route
// @access  Public
router.get('/', (req,res) => res.send("Transfer route"));

module.exports = router