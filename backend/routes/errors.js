const express = require('express');
const { getRecentErrors } = require('../controllers/errorController');

const router = express.Router();

// Get recent errors
router.get('/', getRecentErrors);

module.exports = router;