// Mock data for PiSync devices and errors
const generateMockDevices = () => {
  const devices = [];
  const statuses = ['Success', 'Failed', 'Pending'];
  const statusIcons = { Success: '✅', Failed: '❌', Pending: '⏳' };
  
  for (let i = 123; i <= 142; i++) {
    const deviceId = `PBX00${i}`;
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const lastSync = new Date(Date.now() - Math.random() * 5 * 24 * 60 * 60 * 1000);
    
    devices.push({
      deviceId,
      lastSyncTime: lastSync.toLocaleString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }),
      syncStatus: status,
      statusIcon: statusIcons[status],
      lastSyncTimestamp: lastSync.getTime()
    });
  }
  
  return devices.sort((a, b) => b.lastSyncTimestamp - a.lastSyncTimestamp);
};

const generateMockErrors = () => {
  const errors = [
    { deviceId: 'PBX00124', message: 'Connection Timeout', lastAttempt: '27-Apr-2025' },
    { deviceId: 'PBX00156', message: 'Storage Full', lastAttempt: '26-Apr-2025' },
    { deviceId: 'PBX00178', message: 'Unknown Sync Error', lastAttempt: '25-Apr-2025' },
    { deviceId: 'PBX00182', message: 'Authentication Failure', lastAttempt: '24-Apr-2025' },
    { deviceId: 'PBX00191', message: 'Server Not Reachable', lastAttempt: '23-Apr-2025' }
    
  ];
  
  return errors;
};

module.exports = {
  devices: generateMockDevices(),
  errors: generateMockErrors()
};