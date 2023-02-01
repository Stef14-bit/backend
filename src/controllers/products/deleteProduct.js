const connection = require("../../../database");

module.exports = (req, res) => {
  const id = req.params.id;
  const sqlQuery = "DELETE FROM products WHERE id=?";
  connection
    .promise()
    .query(sqlQuery, [id])
    .then(([result]) => {
      if (!result.affectedRows) {
        return res.status(404).send("Failed to delete product");
      }
      res.status(200).send("Product deleted successfully");
    })
    .catch((err) => {
      console.error("Could not delete product");
      res.status(500);
    });
};
