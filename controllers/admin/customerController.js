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

  const customer = await Customer.create({
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

const removeCustomer = asyncHandler(async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.sendStatus(400);
  }

  const removed = await Customer.findOneAndRemove({ _id: id });

  res.sendStatus(200);
});

module.exports = {
  getAllCustomers,
  updateCustomer,
  createCustomer,
  removeCustomer,
};
