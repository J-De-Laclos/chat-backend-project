// const isAuthenticated = require("../middleware/isAuthenticated");
const express = require("express");
const router = express.Router();

const Channel = require("../models/Channel");

//Créer un nouveau canal
router.post("/channel", async (req, res) => {
  try {
    // console.log(req.body);
    const { name } = req.body;
    const newChannel = new Channel({ name });
    await newChannel.save();
    res.status(201).json({ message: `Channel ${name} created` });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtenir la liste de tous les canaux

router.get("/channel", async (req, res) => {
  try {
    const channels = await Channel.find();
    // console.log(channels);
    res.status(200).json(channels);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
