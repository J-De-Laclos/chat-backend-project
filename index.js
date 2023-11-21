const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost/chat-project-back");

const userRoutes = require("./routes/user");
app.use(userRoutes);

const channelRoutes = require("./routes/channel");
app.use(channelRoutes);

const messageRoutes = require("./routes/message");
app.use(messageRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ error: "Cette route n'existe pas !!!" });
});

app.listen(3000, () => {
  console.log("Server Chatoyant Activated");
});
