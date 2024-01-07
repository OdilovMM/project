const express = require("express");
const products = require("./data/products.js");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/db.js");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection is successfull"))
  .catch((err) => console.log(err));



const port = process.env.PORT || 5000;

app.use(cors());
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
  // console.log(products)
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
  // console.log(products)
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
