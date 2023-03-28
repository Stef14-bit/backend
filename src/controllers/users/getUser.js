const connection = require("../../../database");

module.exports = (req, res) => {
  const id = req.params.id;
  const sqlQuery =
    "SELECT users.id, users.email, users.hashed_password, users.full_name, users.username,users.image, roles.name as role_name FROM users JOIN roles ON users.role_id = roles.id WHERE users.id=?";
  connection
    .promise()
    .query(sqlQuery, [id])
    .then(([result]) => {
      if (!result.length) {
        return res.status(404).send("No user found");
      }
      res.json(result[0]);
    })
    .catch((err) => {
      console.error("Error retrieving user", err);
      res.status(500);
    });
};
