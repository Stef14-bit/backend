const connection = require("../../../database");

module.exports = (req, res) => {
  const id = req.params.id;
  const { name, image = "" } = req.body;
  const sqlQuery = "UPDATE categories SET name=?,image=? WHERE id=?";
  const values = [name, image, id];

  connection
    .promise()
    .query(sqlQuery, values)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        return res.status(404).send("Category not found");
      }
      res.send({ message: "Category updated successfuly" });
    })
    .catch((err) => {
      console.error("Error updating category", err);
      res.status(500);
    });
};
