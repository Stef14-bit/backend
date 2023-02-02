const Router = require("express").Router();

const {
  getAllOrders,
  getOrder,
  postOrder,
  putOrder,
  deleteOrder,
} = require("../controllers/orders");

Router.get("/", getAllOrders);
Router.get("/:id", getOrder);
Router.post("/", postOrder);
Router.put("/:id", putOrder);
Router.delete("/:id", deleteOrder);

module.exports = Router;
