const { connect } = require("../../../database");
const connection = require("../../../database");

module.exports = (req, res) => {
  const id = req.params.id;
  const sqlQuery =
    "UPDATE users SET email=?,hashed_password=?,role_id=?,image=?,full_name=?,username=? WHERE id=?";
  const {
    email,
    hashed_password,
    role_id,
    image = "",
    full_name,
    username,
  } = req.body;
  const values = [
    email,
    hashed_password,
    role_id,
    image,
    full_name,
    username,
    id,
  ];

  connection
    .promise()
    .query(sqlQuery, values)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        return res.status(400).send("Failed to update user");
      }
      res.status(200).send("User updated");
    })
    .catch((err) => {
      console.error("Error updating user", err);
      res.status(500);
    });
};
