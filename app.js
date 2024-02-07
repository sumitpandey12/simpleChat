const express = require("express");
const bodyParser = require("body-parser");

const loginRouter = require("./routes/login");
const chatRouter = require("./routes/chat");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/login", loginRouter);
app.use("/chat", chatRouter);

app.listen(3000);
