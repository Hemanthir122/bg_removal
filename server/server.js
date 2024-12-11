import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./configs/mongodb.js";

// APP CONFIGURATION
dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// WRAP IN ASYNC FUNCTION TO HANDLE DATABASE CONNECTION
(async () => {
  try {
    // Connect to the database
    await connectDB();
    console.log("Database connection established successfully");

    // API ROUTES
    app.get("/", (req, res) => {
      res.send("Hello! The server is running.");
    });

    
    // START THE SERVER
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error.message);
    process.exit(1); // Exit the process if something goes wrong
  }
})();