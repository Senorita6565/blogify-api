const mongoose = require("mongoose");

const DB_HOST = process.env.DB_HOST;

const connectDB = async () => {
  try {
    await mongoose.connect(DB_HOST);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Mongo error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;