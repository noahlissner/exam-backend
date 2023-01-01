const asyncHandler = require("express-async-handler");

const Product = require("../../models/productModel");

const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find().populate("category").select("-__v");

  res.status(200).json(products);
});

const createProduct = asyncHandler(async (req, res) => {
  const { title, img, category, price, published } = req.body.data;

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
    img,
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

const update = asyncHandler(async (req, res) => {
  const { data } = req.body;
  console.log(data._id);

  // if (!id || (value !== true && value !== false)) {
  //   res.status(400);
  //   throw new Error("Something went wrong");
  // }

  console.log(req.body);
  const product = await Product.findByIdAndUpdate({ _id: data._id }, data);
  res.sendStatus(200);
});

module.exports = {
  createProduct,
  getAllProducts,
  update,
};