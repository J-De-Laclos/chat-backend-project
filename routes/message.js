const express = require("express");
const router = express.Router();

const Message = require("../models/Message");

//Créer un nouveau message dans le chat
router.post("/message", async (req, res) => {
  try {
    // console.log(req.body);
    const { channelId, sender, content } = req.body;
    const newMessage = new Message({ channelId, sender, content });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//Obtenir la liste des messages en fonction du canal
router.get("/message/:channelId", async (req, res) => {
  try {
    const channelId = req.params.channelId;
    const messages = await Message.find({ channelId }).sort({
      createdAt: "asc",
    });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
