// src/controllers/posts.controller.js
const { successResponse, errorResponse } = require('../utils/response');

// In this module we only send response envelopes.
// Replace the internal logic with DB calls in Module 3.

const getAllPosts = (req, res, next) => {
  try {
    // placeholder data
    const posts = [{ id: 1, title: 'Hello Blogify', body: '...' }];

    return res.status(200).json(successResponse(posts));
  } catch (err) {
    return next(err);
  }
};

const getPostById = (req, res, next) => {
  try {
    const { id } = req.params;
    // placeholder
    const post = { id, title: `Post ${id}`, body: '...' };

    return res.status(200).json(successResponse(post));
  } catch (err) {
    return next(err);
  }
};

const createPost = (req, res, next) => {
  try {
    const { title, body } = req.body;
    // placeholder created resource
    const created = { id: Date.now(), title, body };

    return res.status(201).json(successResponse(created, 'Post created.'));
  } catch (err) {
    return next(err);
  }
};

const updatePost = (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = { id, ...req.body };
    return res.status(200).json(successResponse(updated, 'Post updated.'));
  } catch (err) {
    return next(err);
  }
};

const deletePost = (req, res, next) => {
  try {
    const { id } = req.params;
    return res.status(200).json(successResponse(null, `Post ${id} deleted.`));
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
