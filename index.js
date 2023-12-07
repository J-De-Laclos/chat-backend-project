const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

const userRoutes = require("./routes/user");
app.use(userRoutes);

const channelRoutes = require("./routes/channel");
app.use(channelRoutes);

const messageRoutes = require("./routes/message");
app.use(messageRoutes);

app.get("/", (req, res) => {
  res.json("Bienvenue sur l'API de chat");
});

app.all("*", (req, res) => {
  res.status(404).json({ error: "Cette route n'existe pas !!!" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server Chatoyant Activated");
});
