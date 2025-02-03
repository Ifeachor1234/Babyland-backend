const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to MongoDB sucessfully");
  } catch (err) {
    console.error("mongoDB connection:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
