const Router = require("express").Router();

const {
  getAllProducts,
  getProduct,
  getAllProductsAsc,
  getAllProductsDesc,
  postProduct,
} = require("../controllers/products");

Router.get("/", getAllProducts);
Router.get("/price-up", getAllProductsAsc);
Router.get("/price-down", getAllProductsDesc);
Router.get("/:id", getProduct);
Router.post("/new-product", postProduct);

module.exports = Router;
