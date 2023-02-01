const Router = require("express").Router();

const {
  getCategories,
  getCategoriesProducts,
  postCategories,
  putCategories,
  deleteCategories,
} = require("../controllers/categories");

Router.get("/", getCategories);
Router.post("/", postCategories);
Router.get("/:id/products", getCategoriesProducts);
Router.put("/:id", putCategories);
Router.delete("/:id", deleteCategories);

module.exports = Router;
