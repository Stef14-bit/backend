const Router = require("express").Router();

const { validateUser } = require("../../validators/userValidator");
const {
  getAllUsers,
  getUser,
  postUser,
  putUser,
  deleteUser,
} = require("../controllers/users");

Router.get("/", getAllUsers);
Router.get("/:id", getUser);
Router.post("/", validateUser, postUser);
Router.put("/:id", validateUser, putUser);
Router.delete("/:id", deleteUser);

module.exports = Router;
