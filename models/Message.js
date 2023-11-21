const mongoose = require("mongoose");

// const Message = mongoose.model(
//   "Message",
//   {
//     channelId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Channel",
//       required: true,
//     },
//     sender: {
//       type: String,
//       required: true,
//     },
//     content: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = Message;

const messageSchema = new mongoose.Schema(
  {
    channelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Channel",
      required: true,
    },
    sender: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
