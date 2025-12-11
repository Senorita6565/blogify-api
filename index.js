// src/index.js
const express = require('express');
const cors = require('cors');
const mainRouter = require('./src/routes'); // src/routes/index.js
const errorHandler = require('./src/middleware/errorHandler');

const app = express();

// Global middleware (order matters)
app.use(cors());
app.use(express.json());

// ⭐ ADD ROOT ROUTE HERE ⭐
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Blogify API is running 🚀",
  });
});

// Mount the app routes under versioned prefix
app.use('/api/v1', mainRouter);

// Centralized error handler (must be last middleware)
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Blogify API running on port ${PORT}`);
});

module.exports = app; // export for tests if needed
