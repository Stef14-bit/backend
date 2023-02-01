require("dotenv").config();
const express = require("express");
const connection = require("../database");
const { usersRoute, productsRoute, categoriesRoute } = require("./routes");

connection
  .promise()
  .query("USE groceries_delivery")
  .catch((err) => console.error(err));

const app = express();
app.use(express.json());

app.use("/users", usersRoute);
app.use("/products", productsRoute);
app.use("/categories", categoriesRoute);

module.exports = app;
