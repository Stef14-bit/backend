const Router = require("express").Router();
const { validateCategory } = require("../../validators/categoryValidator");

const {
  getCategories,
  getCategoriesProducts,
  postCategories,
  putCategories,
  deleteCategories,
} = require("../controllers/categories");

Router.get("/", getCategories);
Router.post("/", validateCategory, postCategories);
Router.get("/:id/products", getCategoriesProducts);
Router.put("/:id", validateCategory, putCategories);
Router.delete("/:id", deleteCategories);

module.exports = Router;
