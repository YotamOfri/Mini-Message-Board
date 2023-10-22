var express = require("express");
var router = express.Router();
const Message = require("../modles/messsage");
router.get("/", async function (req, res, next) {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.json({ "Some thing went Wrong": error });
  }
});
router.get("/:id", async function (req, res, next) {
  const Limit = req.params.id * 10;
  try {
    const messages = await Message.find()
      .sort({ added: -1 })
      .skip(Limit - 10)
      .limit(Limit);
    res.json(messages);
  } catch (error) {
    res.json({ "Some thing went Wrong": error });
  }
});
module.exports = router;
