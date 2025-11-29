/* src/routes/posts.routes.js */

const express = require('express');
const router = express.Router();

const postController = require('../controllers/posts.controller');

// Existing route
router.get('/', postController.getAllPosts);

// ✅ New dynamic route for single post
router.get('/:postId', postController.getPostById);

module.exports = router;

