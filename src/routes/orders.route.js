const Router = require("express").Router();

const { getAllOrders, getOrder } = require("../controllers/orders");

Router.get("/", getAllOrders);
Router.get("/:id", getOrder);

module.exports = Router;
