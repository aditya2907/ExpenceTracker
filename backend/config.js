module.exports = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/expensetracker',
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret_key',
  // Add other configuration variables as needed
};