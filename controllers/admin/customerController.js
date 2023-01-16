const asyncHandler = require("express-async-handler");

const Customer = require("../../models/customerModel");

const getAllCustomers = asyncHandler(async (req, res) => {
  const customers = await Customer.find().select("-__v");

  res.status(200).json(customers);
});

const createCustomer = asyncHandler(async (req, res) => {
  const { name, email, street, zip, city } = req.body.data;

  if (!name || !email || !street || !zip || !city) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }

  const customer = Customer.create({
    name,
    email,
    street,
    zip,
    city,
  });

  if (customer) {
    res.status(201).json(customer);
  } else {
    res.status(400);
    throw new Error("Invalid data");
  }
});

const updateCustomer = asyncHandler(async (req, res) => {
  const { name, email, street, zip, city, _id } = req.body.data;
  if (!name || !email || !street || !zip || !city) {
    res.status(400);
    throw new Error("Please provide all required fields");
  }

  const customer = await Customer.findByIdAndUpdate({ _id }, req.body.data);
  if (customer) {
    res.status(200).json(customer);
  } else {
    res.status(400);
    throw new Error("Invalid data");
  }
});

module.exports = {
  getAllCustomers,
  updateCustomer,
  createCustomer,
};
