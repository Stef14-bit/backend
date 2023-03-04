const Router = require("express").Router();
const validateOrder = require("../../validators/orderValidator");

const {
  getAllOrders,
  getOrder,
  postOrder,
  putOrder,
  deleteOrder,
} = require("../controllers/orders");

Router.get("/", getAllOrders);
Router.get("/:id", getOrder);
Router.post("/", validateOrder, postOrder);
Router.put("/:id", validateOrder, putOrder);
Router.delete("/:id", deleteOrder);

module.exports = Router;
