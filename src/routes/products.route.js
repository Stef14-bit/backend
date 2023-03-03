const Router = require("express").Router();

const { validateProduct } = require("../../validators/productValidator");
const {
  getAllProducts,
  getProduct,
  postProduct,
  putProduct,
  deleteProduct,
} = require("../controllers/products");

Router.get("/", getAllProducts);
Router.get("/:id", getProduct);
Router.post("/", validateProduct, postProduct);
Router.put("/:id", validateProduct, putProduct);
Router.delete("/:id", deleteProduct);

module.exports = Router;
