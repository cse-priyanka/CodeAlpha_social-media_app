require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
const Post = require("./models/Post");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

// POSTS
app.post("/posts", async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.json(post);
});

app.get("/posts", async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

// LIKE POST
app.post("/posts/:id/like", async (req, res) => {
  const { user } = req.body; // user from frontend
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });

  // Prevent multiple likes by same user
  if (post.likedBy.includes(user)) {
    return res.status(400).json({ message: "You already liked this post" });
  }

  post.likes++;
  post.likedBy.push(user);
  await post.save();

  res.json(post);
});

app.post("/posts/:id/comment", async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ message: "Post not found" });
  post.comments.push(req.body);
  await post.save();
  res.json(post);
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
