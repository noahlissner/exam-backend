const mongoose = require("mongoose");

const productModel = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  published: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Product", productModel);
