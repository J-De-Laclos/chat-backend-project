const mongoose = require("mongoose");

const Channel = mongoose.model("Channel", {
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = Channel;
