const asyncHandler = require("../middleware/asyncHandler");
const Product = require("../models/productModel");



//@desc             Fetch all products
//@route            GET /api/products
//@access           Public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
});


//@desc             Fetch a product
//@route            GET /api/products/:id
//@access           Public

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.status(200).json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

module.exports = {
  getProducts,
  getProductById,
};
