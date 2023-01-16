const asyncHandler = require("express-async-handler");

const Customer = require("../../models/customerModel");
const Order = require("../../models/orderModel");

const createOrder = asyncHandler(async (req, res) => {
  const { name, email, street, zip, city, payment, shipping, products } =
    req.body;

  const customerExists = await Customer.findOne({ email });

  let customer;

  if (customerExists) {
    customer = customerExists;
  } else {
    customer = await Customer.create({
      name,
      email,
      street,
      zip,
      city,
    });
  }

  const order = await Order.create({
    customer: customer.id,
    products,
    shipping,
    payment,
  });

  res.status(200).json(order);
});

module.exports = { createOrder };
