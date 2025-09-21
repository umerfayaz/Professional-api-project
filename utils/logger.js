const ActivityLog = require('../models/ActivityLog');

const logActivity = async (userId, action, resourceType, resourceId = null, details = {}, req = null) => {
  try {
    const logData = {
      userId,
      action,
      resourceType,
      resourceId,
      details,
      ipAddress: req ? req.ip || req.connection.remoteAddress : null,
      userAgent: req ? req.get('User-Agent') : null
    };

    await ActivityLog.create(logData);
  } catch (error) {
    console.error('Error logging activity:', error);
    // Don't throw error to avoid breaking the main flow
  }
};

module.exports = { logActivity };