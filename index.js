// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// require("dotenv").config();
// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect(process.env.MONGODB_URI);

// const userRoutes = require("./routes/user");
// app.use(userRoutes);

// const channelRoutes = require("./routes/channel");
// app.use(channelRoutes);

// const messageRoutes = require("./routes/message");
// app.use(messageRoutes);

// app.all("*", (req, res) => {
//   res.status(404).json({ error: "Cette route n'existe pas !!!" });
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log("Server Chatoyant Activated");
// });
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const corsOptions = {
  origin: "https://chat-project-miaou-012.netlify.app",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(express.json());
app.use(cors(corsOptions));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userRoutes = require("./routes/user");
app.use("/user", userRoutes); // Ajoute le préfixe "/user" aux routes utilisateur

const channelRoutes = require("./routes/channel");
app.use("/channel", channelRoutes); // Ajoute le préfixe "/channel" aux routes canal

const messageRoutes = require("./routes/message");
app.use("/message", messageRoutes); // Ajoute le préfixe "/message" aux routes message

app.all("*", (req, res) => {
  res.status(404).json({ error: "Cette route n'existe pas !!!" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server Chatoyant Activated");
});
