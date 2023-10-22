const mongoose = require("mongoose");
const MessageSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is required"],
  },
  text: {
    type: String,
    required: [true, "Text is required"],
  },
  picture: {
    type: Number,
    default: 1,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Message", MessageSchema);
