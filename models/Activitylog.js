const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  action: {
    type: String,
    required: true,
    enum: [
      'USER_REGISTER',
      'USER_LOGIN',
      'USER_LOGOUT',
      'USER_PROFILE_ACCESS',
      'PRODUCT_CREATE',
      'PRODUCT_READ',
      'PRODUCT_UPDATE',
      'PRODUCT_DELETE',
      'PRODUCTS_LIST_ACCESS'
    ]
  },
  resourceType: {
    type: String,
    required: true,
    enum: ['USER', 'PRODUCT', 'SYSTEM']
  },
  resourceId: {
    type: mongoose.Schema.Types.ObjectId,
    default: null
  },
  details: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  ipAddress: {
    type: String,
    default: null
  },
  userAgent: {
    type: String,
    default: null
  }
}, {
  timestamps: true
});

// Indexes for better performance
activityLogSchema.index({ userId: 1, createdAt: -1 });
activityLogSchema.index({ action: 1, createdAt: -1 });

module.exports = mongoose.model('ActivityLog', activityLogSchema);