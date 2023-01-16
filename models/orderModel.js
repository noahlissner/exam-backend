const mongoose = require("mongoose");

const orderModel = mongoose.Schema({
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
  payment: {
    type: String,
    required: true,
  },
  shipping: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Order", orderModel);
