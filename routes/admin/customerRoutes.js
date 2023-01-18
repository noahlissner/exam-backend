const express = require("express");
const router = express.Router();
const {
  getAllCustomers,
  createCustomer,
  updateCustomer,
  removeCustomer,
} = require("../../controllers/admin/customerController");

router.get("/getall", getAllCustomers);
router.post("/update", updateCustomer);
router.post("/create", createCustomer);
router.post("/remove", removeCustomer);

module.exports = router;
