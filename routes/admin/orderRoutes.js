const express = require("express");
const router = express.Router();
const {
  getAllOrders,
  updateOrderStatus,
  getOrder,
} = require("../../controllers/admin/orderController");

router.get("/getall", getAllOrders);
router.get("/getorder/:id", getOrder);
router.post("/update", updateOrderStatus);

module.exports = router;
