Professional API Project
A comprehensive REST API built with Node.js, Express, and MongoDB featuring user authentication, product management, and detailed activity logging.
🚀 Features

Authentication System

User registration with input validation
JWT-based login/logout system
Secure password hashing with bcrypt
Cookie-based token storage


User Management

User profile retrieval
Role-based access control
Activity tracking


Product CRUD Operations

Create products with ownership tracking
Read products with pagination and filtering
Update products (owner-only access)
Delete products (owner-only access)


Activity Logging

Comprehensive logging of all user actions
Timestamped activity records
IP address and user agent tracking


Security Features

Rate limiting
Input validation with Joi
CORS protection
Helmet security headers
Error handling middleware



📋 Prerequisites

Node.js (v14 or higher)
MongoDB (v4.4 or higher)
npm or yarn

⚙️ Installation

Clone the repository:

bashgit clone <your-repo-url>
cd professional-api-project

Install dependencies:

bashnpm install

Create a .env file in the root directory:

env# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/professional-api

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production-make-it-very-long-and-random
JWT_EXPIRES_IN=7d

# Client Configuration
CLIENT_URL=http://localhost:3000

Start MongoDB service on your machine
Run the application:

bash# Development mode with nodemon
npm run dev

# Production mode
npm start
The server will start on http://localhost:5000
📚 API Documentation
Base URL
http://localhost:5000/api
Authentication Endpoints
Register User
httpPOST /api/auth/register
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "password": "securepassword123",
  "profilePicture": "https://example.com/profile.jpg"
}
Response:
json{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "_id": "64f8a1b2c3d4e5f6g7h8i9j0",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "role": "user",
      "isActive": true,
      "profilePicture": "https://example.com/profile.jpg",
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  }
}
Login User
httpPOST /api/auth/login
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
Response:
json{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "_id": "64f8a1b2c3d4e5f6g7h8i9j0",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "role": "user",
      "isActive": true,
      "lastLogin": "2024-01-15T10:35:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
Logout User
httpPOST /api/auth/logout
Cookie: token=your-jwt-token
Response:
json{
  "success": true,
  "message": "Logout successful"
}
User Endpoints
Get User Profile
httpGET /api/user/profile
Cookie: token=your-jwt-token
Response:
json{
  "success": true,
  "message": "User profile retrieved successfully",
  "data": {
    "user": {
      "_id": "64f8a1b2c3d4e5f6g7h8i9j0",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "role": "user",
      "isActive": true,
      "lastLogin": "2024-01-15T10:35:00.000Z"
    }
  }
}
Product Endpoints
Create Product
httpPOST /api/products
Content-Type: application/json
Cookie: token=your-jwt-token

{
  "name": "iPhone 15 Pro",
  "description": "Latest iPhone with advanced features and improved camera system.",
  "price": 999.99,
  "category": "Electronics",
  "stock": 50,
  "images": ["https://example.com/iphone1.jpg", "https://example.com/iphone2.jpg"],
  "tags": ["smartphone", "apple", "mobile", "technology"]
}
Response:
json{
  "success": true,
  "message": "Product created successfully",
  "data": {
    "product": {
      "_id": "64f8a1b2c3d4e5f6g7h8i9j1",
      "name": "iPhone 15 Pro",
      "description": "Latest iPhone with advanced features and improved camera system.",
      "price": 999.99,
      "category": "Electronics",
      "stock": 50,
      "images": ["https://example.com/iphone1.jpg", "https://example.com/iphone2.jpg"],
      "tags": ["smartphone", "apple", "mobile", "technology"],
      "isActive": true,
      "createdBy": {
        "_id": "64f8a1b2c3d4e5f6g7h8i9j0",
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com"
      },
      "createdAt": "2024-01-15T10:40:00.000Z",
      "updatedAt": "2024-01-15T10:40:00.000Z"
    }
  }
}
Get All Products
httpGET /api/products?page=1&limit=10&category=Electronics&search=iphone&sortBy=price&sortOrder=asc
Cookie: token=your-jwt-token
Query Parameters:

page (optional): Page number for pagination (default: 1)
limit (optional): Number of items per page (default: 10)
category (optional): Filter by product category
search (optional): Search in name, description, and tags
sortBy (optional): Sort field (default: createdAt)
sortOrder (optional): Sort order - 'asc' or 'desc' (default: desc)

Response:
json{
  "success": true,
  "message": "Products retrieved successfully",
  "data": {
    "products": [
      {
        "_id": "64f8a1b2c3d4e5f6g7h8i9j1",
        "name": "iPhone 15 Pro",
        "description": "Latest iPhone with advanced features and improved camera system.",
        "price": 999.99,
        "category": "Electronics",
        "stock": 50,
        "createdBy": {
          "firstName": "John",
          "lastName": "Doe",
          "email": "john.doe@example.com"
        }
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalProducts": 50,
      "hasNextPage": true,
      "hasPrevPage": false
    }
  }
}
Get Single Product
httpGET /api/products/64f8a1b2c3d4e5f6g7h8i9j1
Cookie: token=your-jwt-token
Update Product
httpPUT /api/products/64f8a1b2c3d4e5f6g7h8i9j1
Content-Type: application/json
Cookie: token=your-jwt-token

{
  "name": "iPhone 15 Pro Max",
  "price": 1199.99,
  "stock": 30
}
Note: Only the product owner can update their products.
Delete Product
httpDELETE /api/products/64f8a1b2c3d4e5f6g7h8i9j1
Cookie: token=your-jwt-token
Note: Only the product owner can delete their products.
🏗️ Project Structure
professional-api-project/
├── server.js                 # Main server file
├── package.json              # Dependencies and scripts
├── .env                      # Environment variables
├── .gitignore               # Git ignore file
├── README.md                # Project documentation
├── models/                  # Database models
│   ├── User.js              # User model with authentication
│   ├── Product.js           # Product model with validations
│   └── ActivityLog.js       # Activity logging model
├── routes/                  # API routes
│   ├── auth.js              # Authentication routes
│   ├── user.js              # User profile routes
│   └── product.js           # Product CRUD routes
├── middleware/              # Custom middleware
│   ├── auth.js              # JWT authentication middleware
│   ├── validation.js        # Input validation middleware
│   └── errorHandler.js      # Global error handling
└── utils/                   # Utility functions
    └── logger.js            # Activity logging utility
🔒 Security Features

Password Security: Passwords are hashed using bcrypt with salt rounds
JWT Authentication: Secure token-based authentication
Input Validation: All inputs are validated using Joi schemas
Rate Limiting: API requests are rate-limited to prevent abuse
CORS Protection: Configured for secure cross-origin requests
Security Headers: Helmet.js adds security headers
Cookie Security: HTTPOnly, Secure, and SameSite cookie settings

📊 Activity Logging
The system logs all user activities including:

User registration, login, logout
Profile access
Product creation, reading, updating, deletion
Products list access with filters

Each log entry includes:

User ID and action performed
Resource type and ID (if applicable)
Additional details (changes made, filters applied)
IP address and user agent
Timestamp

🚨 Error Handling
The API includes comprehensive error handling for:

Validation errors (400 Bad Request)
Authentication errors (401 Unauthorized)
Authorization errors (403 Forbidden)
Not found errors (404 Not Found)
Server errors (500 Internal Server Error)

All errors return a consistent JSON structure:
json{
  "success": false,
  "message": "Error description",
  "details": "Additional error details (optional)"
}
📈 Performance Features

Database Indexing: Optimized database queries with proper indexes
Pagination: Efficient pagination for large datasets
Query Optimization: Selective field population and filtering
Rate Limiting: Prevents API abuse and ensures fair usage

🧪 Testing
You can test the API using tools like:

Postman
Insomnia
Thunder Client (VS Code extension)
curl commands

Sample curl commands:
Register:
bashcurl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "password": "securepassword123"
  }'
Login:
bashcurl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "password": "securepassword123"
  }' \
  -c cookies.txt
Get Profile:
bashcurl -X GET http://localhost:5000/api/user/profile \
  -b cookies.txt
🚀 Deployment
Environment Variables for Production:

Set NODE_ENV=production
Use a strong, random JWT_SECRET
Configure MONGODB_URI for your production database
Set appropriate CLIENT_URL for CORS

Production Considerations:

Use HTTPS in production
Set up proper MongoDB security
Configure reverse proxy (nginx)
Set up logging and monitoring
Use PM2 or similar for process management

📝 License
This project is licensed under the MIT License.
👨‍💻 Author
Umer Fayaz
🤝 Contributing

Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
