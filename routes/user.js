const express = require('express');
const authMiddleware = require('../middleware/auth');
const { logActivity } = require('../utils/logger');

const router = express.Router();

// Get current user profile
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    // Log activity
    await logActivity(req.user._id, 'USER_PROFILE_ACCESS', 'USER', req.user._id, {}, req);

    res.status(200).json({
      success: true,
      message: 'User profile retrieved successfully',
      data: {
        user: req.user.getPublicProfile()
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve user profile',
      error: error.message
    });
  }
});

module.exports = router;