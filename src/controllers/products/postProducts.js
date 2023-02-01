const connection = require("../../../database");

module.exports = (req, res) => {
  const sqlQuery =
    "INSERT INTO products (name, description, price, stock, shop_id, category_id, image) VALUES (?,?,?,?,?,?,?)";
  const {
    name,
    description,
    price,
    stock,
    shop_id,
    category_id,
    image = "",
  } = req.body;

  connection
    .promise()
    .query(sqlQuery, [
      name,
      description,
      price,
      stock,
      shop_id,
      category_id,
      image,
    ])
    .then(([result]) => {
      const createProduct = {
        id: result.insertId,
        name,
        description,
        price,
        stock,
        shop_id,
        category_id,
        image,
      };
      res.status(201).json(createProduct);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send({ error: "Failed to add product" });
    });
};
