const Router = require("express").Router();

const { getProducts } = require("../controllers/products");

Router.get("/", getProducts);

module.exports = Router;
