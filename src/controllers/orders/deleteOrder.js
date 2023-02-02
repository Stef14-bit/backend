const connection = require("../../../database");

module.exports = (req, res) => {
  const id = req.params.id;
  const sqlQuery = "DELETE FROM orders WHERE id=?";

  connection
    .promise()
    .query(sqlQuery, [id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        return res.status(404).send("Failed to delete order");
      }
      res.status(200).send({ message: "Order successfully deleted" });
    })
    .catch((err) => {
      console.error("Could not delete product");
      res.status(500);
    });
};
