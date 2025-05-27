const express = require('express');
const { getAllDevices, triggerSync } = require('../controllers/deviceController');

const router = express.Router();

// Get all devices
router.get('/', getAllDevices);

// Trigger sync for specific device
router.post('/:id/sync', triggerSync);

module.exports = router;