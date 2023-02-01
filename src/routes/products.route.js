const Router = require("express").Router();

const {
  getAllProducts,
  getProduct,
  getAllProductsAsc,
  getAllProductsDesc,
  postProduct,
  putProduct,
  deleteProduct,
} = require("../controllers/products");

Router.get("/", getAllProducts);
Router.get("/price-up", getAllProductsAsc);
Router.get("/price-down", getAllProductsDesc);
Router.get("/:id", getProduct);
Router.post("/", postProduct);
Router.put("/:id", putProduct);
Router.delete("/:id", deleteProduct);

module.exports = Router;
