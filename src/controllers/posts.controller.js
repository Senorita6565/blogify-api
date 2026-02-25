const Post = require("../models/post.model");

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().limit(20);
    return res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return res.status(200).json([]); 
  }
};
