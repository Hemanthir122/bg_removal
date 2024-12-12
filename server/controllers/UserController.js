const svix = require("svix");
const userModel = require("../models/userModel");

const { Webhook } = svix;

const clerkWebhooks = async (req, res) => {
  try {
    // Initialize the Svix Webhook with the secret
    const webhook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // Verify the webhook signature
    const payload = JSON.stringify(req.body);
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    webhook.verify(payload, headers);

    const { data, type } = req.body;

    // Handle the webhook event based on its type
    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: data.email_addresses?.[0]?.email_address || "",
          firstName: data.first_name || "",
          lastName: data.last_name || "",
          photo: data.image_url || "",
        };

        await userModel.create(userData);
        res.status(201).json({ message: "User created successfully" });
        break;
      }

      case "user.updated": {
        const updatedUserData = {
          email: data.email_addresses?.[0]?.email_address || "",
          firstName: data.first_name || "",
          lastName: data.last_name || "",
          photo: data.image_url || "",
        };

        await userModel.findOneAndUpdate({ clerkId: data.id }, updatedUserData);
        res.json({ message: "User updated successfully" });
        break;
      }

      case "user.deleted": {
        await userModel.findOneAndDelete({ clerkId: data.id });
        res.json({ message: "User deleted successfully" });
        break;
      }

      default:
        res.status(400).json({ message: "Unhandled webhook event type" });
        break;
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { clerkWebhooks };
