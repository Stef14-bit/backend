const connection = require("../../../database");

module.exports = (req, res) => {
  const sqlQuery =
    "SELECT users.id, users.email, users.password, users.full_name, users.username,users.image, roles.name as role_name FROM users JOIN roles ON users.role_id = roles.id";

  connection
    .promise()
    .query(sqlQuery)
    .then(([result]) => res.send(result))
    .catch((err) => {
      console.error("An error occurred", err);
      res.sendStatus(500);
    });
};
