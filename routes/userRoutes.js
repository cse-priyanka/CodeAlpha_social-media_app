const express = require("express");
const router = express.Router();
const User = require("../models/User");

// REGISTER
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const existing = await User.findOne({ username });
  if (existing) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = new User({ username, password });
  await user.save();
  res.json({ message: "Registered successfully" });
});

// LOGIN
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({ success: false, message: "User not found" });
  }

  if (user.password !== password) {
    return res.status(400).json({ success: false, message: "Invalid password" });
  }

  res.json({
    success: true,
    message: "Login successful",
    username: user.username
  });
});

module.exports = router;
