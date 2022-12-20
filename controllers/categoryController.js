const asyncHandler = require("express-async-handler");

const Category = require("../models/categoryModel");

const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find().select("-__v");
  res.json(categories);
});

const createCategory = asyncHandler(async (req, res) => {
  const { title } = req.body;

  if (!title) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }

  const category = await Category.create({
    title,
  });

  if (category) {
    res.status(201).json(category);
  } else {
    res.status(400);
    throw new Error("Invalid data");
  }
});

module.exports = {
  createCategory,
  getAllCategories,
};
