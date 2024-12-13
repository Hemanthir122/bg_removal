const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./configs/mongodb.js");
const userRouter = require("./routes/userRoutes.js");

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// API Routes
app.get("/", (req, res) => {
  res.send("Hello! The server is running.");
});
app.use("/api/user", userRouter)

// Start the server and connect to the database
connectDB()
  .then(() => {
    console.log("Database connection established successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start the server:", error.message);
    process.exit(1); // Exit the process if something goes wrong
  });
