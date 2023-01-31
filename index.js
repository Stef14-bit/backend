const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());

const port = 5005;

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.listen(port, (err) => {
  if (err) {
    console.error("failed to connect", err);
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
