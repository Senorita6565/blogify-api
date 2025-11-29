const express = require('express');
const router = express.Router();

// GET /api/v1/posts
router.get('/', (req, res) => {
    res.json([
        { id: 1, title: "First Post", content: "Welcome to Blogify!" },
        { id: 2, title: "Second Post", content: "Modular routing is awesome." }
    ]);
});

module.exports = router;
