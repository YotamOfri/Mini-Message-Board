var express = require("express");
var router = express.Router();
const Message = require("../modles/messsage");
router.post("/", async function (req, res, next) {
  const message = new Message({
    username: req.body.username,
    text: req.body.text,
    picture: req.body.picture,
  });
  try {
    const newMessage = await message.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.json({
      "Something Went Wrong Please Make Sure To Write a Username and A Password":
        error,
    });
  }
});
module.exports = router;
