const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const newMessageRouter = require("./routes/new");
const messagesRouter = require("./routes/messages");
const db = require("./config/db");
const cors = require("cors");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Configure CORS to allow access only from "https://spaceboard.netlify.app/"
const originURL = "https://spaceboard.netlify.app";
app.use(cors({ origin: originURL }));
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin === originURL || originURL === "*") next();
  else res.json("Not Allowed");
});
// Define your routes
app.use("/", indexRouter);
app.use("/messages", messagesRouter);
app.use("/new", newMessageRouter);

// Catch 404 and forward to the error handler
app.use(function (req, res, next) {
  next(res.json("404"));
});

app.listen(3000, () => {
  console.log("Server Started on Port 3000");
});

module.exports = app;
