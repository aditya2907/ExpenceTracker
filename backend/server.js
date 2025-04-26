// filepath: backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Expense Tracker API is running');
});

// Connect to MongoDB
mongoose.connect(config.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  // Start server after DB connection
  app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
  });
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});
