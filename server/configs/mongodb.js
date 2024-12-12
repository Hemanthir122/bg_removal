const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database is connected successfully");
    });

    await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`);
  } catch (error) {
    console.error(`Database connection failed: ${error.message}`);
    process.exit(1); // Exit the process with failure
  }
};

// Export the connectDB function using CommonJS syntax
module.exports = connectDB;
