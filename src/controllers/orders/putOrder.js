const connection = require("../../../database");
module.exports = (req, res) => {
  const id = req.params.id;
  const { customer_id, product_id, quantity } = req.body;
  const sqlQuery =
    "UPDATE orders SET customer_id=?, product_id=?, quantity=? WHERE id=? ";
  const values = [customer_id, product_id, quantity, id];

  connection
    .promise()
    .query(sqlQuery, values)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        return res.status(400).send("Failed to update order");
      }
      res.send({ message: "Order updated" });
    })
    .catch((err) => {
      console.error("Error updating order");
      res.status(500);
    });
};
