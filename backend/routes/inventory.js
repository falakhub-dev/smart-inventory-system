const express = require("express");
const router = express.Router();

const {
  getProducts,
  addProduct
} = require("../controllers/inventoryController");

router.get("/", getProducts);
router.post("/", addProduct);

module.exports = router;