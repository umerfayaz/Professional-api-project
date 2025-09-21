const Joi = require('joi');

const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    
    if (error) {
      const errorMessage = error.details.map(detail => detail.message).join(', ');
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        details: errorMessage
      });
    }
    
    next();
  };
};

// Validation schemas
const registerSchema = Joi.object({
  firstName: Joi.string().min(2).max(30).required(),
  lastName: Joi.string().min(2).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  profilePicture: Joi.string().uri().optional()
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

const productSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  description: Joi.string().min(10).max(1000).required(),
  price: Joi.number().min(0).max(1000000).required(),
  category: Joi.string().valid('Electronics', 'Clothing', 'Books', 'Home', 'Sports', 'Beauty', 'Other').required(),
  stock: Joi.number().integer().min(0).max(10000).required(),
  images: Joi.array().items(Joi.string().uri()).optional(),
  tags: Joi.array().items(Joi.string().min(1).max(30)).optional()
});

module.exports = {
  validateRequest,
  registerSchema,
  loginSchema,
  productSchema
};