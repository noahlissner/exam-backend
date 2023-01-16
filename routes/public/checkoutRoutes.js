const express = require("express");
const router = express.Router();

const { createOrder } = require("../../controllers/public/checkoutController");

router.post("/checkout", createOrder);

module.exports = router;
