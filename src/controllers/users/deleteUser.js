const { connect } = require("../../../database");
const connection = require("../../../database");

module.exports = (req, res) => {
  const sqlQuery = "DELETE FROM users WHERE id=?";
  const id = req.params.id;

  connection
    .promise()
    .query(sqlQuery, [id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        return res.status(404).send("Failed to delete user");
      }
      res.status(204).send("User deleted successfully");
    })
    .catch((err) => {
      console.error("Could not delete user", err);
      res.status(500);
    });
};
