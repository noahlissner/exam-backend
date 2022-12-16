const asyncHandler = require("express-async-handler");

const Product = require("../models/productModel");

const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find().populate("category");

  res.status(200).json(products);
});

const createProduct = asyncHandler(async (req, res) => {
  const { title, description, category, price, published } = req.body;

  if (
    !title ||
    !price ||
    !category ||
    (published !== true && published !== false)
  ) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }

  const product = await Product.create({
    title,
    description,
    category,
    price,
    published,
  });

  if (product) {
    res.status(201).json(product);
  } else {
    res.status(400);
    throw new Error("Invalid data");
  }
});

const updatePublished = asyncHandler(async (req, res) => {
  const { id, value } = req.body;
  console.log(id, value);

  if (!id || (value !== true && value !== false)) {
    res.status(400);
    throw new Error("Something went wrong");
  }

  await Product.findOneAndUpdate({ id }, { published: value });

  res.sendStatus(200);
});

module.exports = {
  createProduct,
  getAllProducts,
  updatePublished,
};
