const express = require("express");
const cors = require("cors");

const inventoryRoutes = require("./routes/inventory");
const supplierRoutes = require("./routes/supplier");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/inventory", inventoryRoutes);
app.use("/supplier", supplierRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});