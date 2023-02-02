const connection = require("../../../database");

module.exports = (req, res) => {
  const sqlQuery =
    "INSERT INTO orders (customer_id, product_id, quantity) VALUES (?,?,?)";
  const { customer_id, product_id, quantity } = req.body;

  connection
    .promise()
    .query(sqlQuery, [customer_id, product_id, quantity])
    .then(([result]) => {
      const createOrder = {
        id: result.insertId,
        customer_id,
        product_id,
        quantity,
      };
      res.status(201).json(createOrder);
    })
    .catch((err) => {
      console.error(error);
      res.status(500).send({ error: "Failed to add orders" });
    });
};
