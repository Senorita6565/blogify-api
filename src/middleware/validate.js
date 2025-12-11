// src/middleware/validate.js
const validateCreatePost = (req, res, next) => {
  const { title, body } = req.body;
  if (!title || !body) {
    return res.status(400).json({
      success: false,
      error: { message: 'title and body are required' }
    });
  }
  next();
};

module.exports = { validateCreatePost };
