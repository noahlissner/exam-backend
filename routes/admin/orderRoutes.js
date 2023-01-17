const express = require("express");
const router = express.Router();
const {
  getAllOrders,
  updateOrderStatus,
} = require("../../controllers/admin/orderController");

router.get("/getall", getAllOrders);
router.post("/update", updateOrderStatus);

module.exports = router;
