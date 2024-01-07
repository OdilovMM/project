const express = require("express");
const products = require("./data/products.js");
const app = express();
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get('/api/products', (req, res) => [
    res.json(products)
])

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
