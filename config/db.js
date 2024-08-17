const mongoose = require("mongoose");

async function connectDB() {
  try {
    // Connect to the MongoDB cluster
    await mongoose.connect(process.env.DB_URI);

    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
}

module.exports = connectDB;
