const connection = require("../../../database");

module.exports = (req, res) => {
  const id = req.params.id;
  const sqlQuery = "DELETE FROM categories where id = ?";

  connection
    .promise()
    .query(sqlQuery, [id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        return res.status(404).send("Category not found");
      }
      res.status(200).json({ message: "Category deleted successfully" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error deleting category" });
    });
};
