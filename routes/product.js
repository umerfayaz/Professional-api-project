const express = require('express');
const Product = require('../models/Product');
const authMiddleware = require('../middleware/auth');
const { validateRequest, productSchema } = require('../middleware/validation');
const { logActivity } = require('../utils/logger');

const router = express.Router();

// Create a new product
router.post('/', authMiddleware, validateRequest(productSchema), async (req, res) => {
  try {
    const productData = {
      ...req.body,
      createdBy: req.user._id
    };

    const product = new Product(productData