const Router = require("express").Router();
const validateCategory = require("../../validators/categoryValidator");

const {
  getCategories,
  getCategoriesProducts,
  postCategories,
  putCategories,
  deleteCategories,
} = require("../controllers/categories");

// Get all categories
Router.get("/", getCategories);

// Create a new category
Router.post("/", validateCategory, postCategories);

// Get products belonging to a category
Router.get("/:id/products", getCategoriesProducts);

// Update a category
Router.put("/:id", validateCategory, putCategories);

// Delete a category
Router.delete("/:id", deleteCategories);

module.exports = Router;
