require("dotenv").config();
const mysql = require("mysql2/promise");

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const database = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

database
  .getConnection()
  .then(() => {
    console.log("Connection to database established");
  })
  .catch((err) => {
    console.error("Atempt failed", err);
  });
module.exports = database;
