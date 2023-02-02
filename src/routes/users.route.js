const Router = require("express").Router();

const {
  getAllUsers,
  getUser,
  postUser,
  putUser,
  deleteUser,
} = require("../controllers/users");

Router.get("/", getAllUsers);
Router.get("/:id", getUser);
Router.post("/", postUser);
Router.put("/:id", putUser);
Router.delete("/:id", deleteUser);

module.exports = Router;
