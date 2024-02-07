const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(
    '<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/chat" method="GET"><input id="username" type="text" name"title"><button type="submit">Login</button></form>'
  );
});

module.exports = router;
