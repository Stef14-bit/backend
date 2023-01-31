require("dotenv").config();
const express = require("express");
const connection = require("../database");
const usersRoute = require("./routes");

connection
  .promise()
  .query("USE groceries_delivery")
  .catch((err) => console.error(err));

const app = express();
app.use(express.json());

app.use("/users", usersRoute);

module.exports = app;
