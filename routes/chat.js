const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res) => {
  // Read message.txt and append in the p
  const messages = fs
    .readFileSync("message.txt", "utf8")
    .split("\n")
    .map((message) => {
      return `<p>${message}</p>`;
    })
    .join("");

  res.send(`
    <form action="/chat" onsubmit='document.getElementById("username").value=localStorage.getItem("username")' method="POST">
      ${messages}
      <input type="hidden" name="username" id="username">
      <input type="text" name="chat"/>
      <button type="submit">Send</button>
    </form>
  `);
});

router.post("/", (req, res) => {
  const body = req.body;
  const message = `${body.username} : ${body.chat}`;
  fs.appendFile("message.txt", message + "\n", (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.redirect("/chat");
});

module.exports = router;
