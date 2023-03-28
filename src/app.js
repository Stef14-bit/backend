require("dotenv").config();
const express = require("express");
const connection = require("../database");
const {
  usersRoute,
  productsRoute,
  categoriesRoute,
  ordersRoute,
} = require("./routes");

connection
  .promise()
  .query("USE sql7604808")
  .catch((err) => console.error(err));

const app = express();
app.use(express.json());

app.use("/api/users", usersRoute);
app.use("/api/products", productsRoute);
app.use("/api/categories", categoriesRoute);
app.use("/api/orders", ordersRoute);

module.exports = app;
