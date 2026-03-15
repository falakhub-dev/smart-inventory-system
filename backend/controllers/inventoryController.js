const pool = require("../db");
const redisClient = require("../redisClient");

exports.getProducts = async (req, res) => {

  const cache = await redisClient.get("products");

  if (cache) {
    return res.json(JSON.parse(cache));
  }

  const result = await pool.query("SELECT * FROM products");

  await redisClient.set("products", JSON.stringify(result.rows));

  res.json(result.rows);
};

exports.addProduct = async (req, res) => {

  const { name, quantity, price } = req.body;

  const result = await pool.query(
    "INSERT INTO products(name,quantity,price) VALUES($1,$2,$3) RETURNING *",
    [name, quantity, price]
  );

  res.json(result.rows[0]);
};