/* src/controllers/posts.controller.js */

exports.getAllPosts = async (req, res) => {
  res.json({ message: "Fetching all posts..." });
};

// ✅ New Controller Function
exports.getPostById = async (req, res) => {
  const postId = req.params.postId; // ← Capture dynamic URL parameter

  res.json({
    message: `Fetching data for post with ID: ${postId}`,
  });
};
