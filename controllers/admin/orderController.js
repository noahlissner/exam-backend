const asyncHandler = require("express-async-handler");
const { findById } = require("../../models/orderModel");

const Order = require("../../models/orderModel");

const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find().populate("products").populate("customer");

  res.status(200).json(orders);
});

const getOrder = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const order = await Order.findById(id).populate("customer");

  if (order) {
    const data = {
      total: order.amount,
      date: order.createdAt,
      payment: order.payment,
      email: order.customer.email,
      delivery: order.shipping,
    };

    res.status(200).json(data);
  } else {
    res.status(400);
    throw new Error("Something went wrong");
  }
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

module.exports = { getAllOrders, updateOrderStatus, getOrder };
