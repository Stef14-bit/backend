const Router = require("express").Router();

const { getUsers } = require("../controllers/users");

Router.get("/", getUsers);

module.exports = Router;
