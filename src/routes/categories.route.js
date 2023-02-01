const Router = require("express").Router();

const {
  getCategories,
  getCategoriesProducts,
  postCategories,
} = require("../controllers/categories");

Router.get("/", getCategories);
Router.post("/", postCategories);
Router.get("/:id/products", getCategoriesProducts);

module.exports = Router;
