const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
const postRoutes = require('./routes/posts.routes');
app.use('/api/v1/posts', postRoutes);

// Server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
