// src/routes/posts.routes.js
const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts.controller');
const { validateCreatePost } = require('../middleware/validate');

// Route definitions only — delegate to controllers
router.get('/', postsController.getAllPosts);
router.get('/:id', postsController.getPostById);
router.post('/', validateCreatePost, postsController.createPost);
router.put('/:id', validateCreatePost, postsController.updatePost);
router.delete('/:id', postsController.deletePost);

module.exports = router;
