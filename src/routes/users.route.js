const Router = require("express").Router();

const { hashPassword } = require("../../auth");
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
Router.post("/", hashPassword, validateUser, postUser);
Router.put("/:id", hashPassword, validateUser, putUser);
Router.delete("/:id", deleteUser);

module.exports = Router;
