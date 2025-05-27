const { errors } = require('../data/mockData');

const getRecentErrors = (req, res) => {
  try {
    res.json({
      success: true,
      data: errors,
      total: errors.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch errors',
      error: error.message
    });
  }
};

module.exports = {
  getRecentErrors
};