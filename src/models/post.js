import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Post title is required"] },
    content: { type: String, required: [true, "Content cannot be empty"] },
    author: { type: String, default: "Anonymous" },
    status: {
      type: String,
      enum: ["Draft", "Published", "Archived"],
      default: "Draft",
    },
    likes: { type: Number, default: 0, min: [0, "Likes cannot be negative"] }
  },
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);
