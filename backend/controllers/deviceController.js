const { devices } = require('../data/mockData');

const getAllDevices = (req, res) => {
  try {
    res.json({
      success: true,
      data: devices,
      total: devices.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch devices',
      error: error.message
    });
  }
};

const triggerSync = (req, res) => {
  try {
    const { id } = req.params;
    const device = devices.find(d => d.deviceId === id);
    
    if (!device) {
      return res.status(404).json({
        success: false,
        message: 'Device not found'
      });
    }

    // this would call the actual sync service
    const now = new Date();
    device.lastSyncTime = now.toLocaleString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
    device.syncStatus = 'Pending';
    device.statusIcon = '⏳';
    device.lastSyncTimestamp = now.getTime();

    // Simulate async sync completion
    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% success rate
      device.syncStatus = success ? 'Success' : 'Failed';
      device.statusIcon = success ? '✅' : '❌';
    }, 2000);

    res.json({
      success: true,
      message: `Sync triggered for device ${id}`,
      data: device
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to trigger sync',
      error: error.message
    });
  }
};

module.exports = {
  getAllDevices,
  triggerSync
};