const express = require("express");
const { clerkWebhooks } = require("../controllers/UserController");

const userRouter = express.Router();

// Define the POST route
userRouter.post("/webhooks", clerkWebhooks);

// Export the router
module.exports = userRouter;
