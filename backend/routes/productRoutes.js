const express = require("express");
const router = express.Router();
const asyncHandler = require("../middleware/asyncHandler");
const Product = require("../models/productModel");

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.status(200).json(products);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      return res.status(200).json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

module.exports = router;
