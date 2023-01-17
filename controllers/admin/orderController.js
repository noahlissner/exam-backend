const asyncHandler = require("express-async-handler");

const Order = require("../../models/orderModel");

const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find().populate("products").populate("customer");

  res.status(200).json(orders);
});

const updateOrderStatus = asyncHandler(async (req, res) => {
  const { _id, status } = req.body.data;

  if ((!_id, !status)) {
    return res.sendStatus(400);
  }

  const updatedOrder = await Order.findOneAndUpdate(
    { _id: _id },
    { status: status }
  );

  res.sendStatus(200);
});

module.exports = { getAllOrders, updateOrderStatus };
