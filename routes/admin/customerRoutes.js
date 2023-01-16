const express = require("express");
const router = express.Router();
const {
  getAllCustomers,
  createCustomer,
  updateCustomer,
} = require("../../controllers/admin/customerController");

router.get("/getall", getAllCustomers);
router.post("/update", updateCustomer);
router.post("/create", createCustomer);

module.exports = router;
