const connection = require("../../../database");

module.exports = (req, res) => {
  const id = req.params.id;
  const {
    name,
    description,
    price,
    stock,
    shop_id,
    category_id,
    image = "",
  } = req.body;
  const sqlQuery =
    "UPDATE products set name=?,description=?,price=?,stock=?,shop_id=?,category_id=?,image=? WHERE id=?";

  const values = [
    name,
    description,
    price,
    stock,
    shop_id,
    category_id,
    image,
    id,
  ];

  connection
    .promise()
    .query(sqlQuery, values)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        return res.status(400).send("Failed to update product");
      }
      res.send({ message: "Product updated successfuly" });
    })
    .catch((err) => {
      console.error("Error updating product");
      res.status(500);
    });
};
