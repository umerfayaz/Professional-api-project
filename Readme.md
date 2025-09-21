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

