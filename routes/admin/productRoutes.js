const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  update,
} = require("../../controllers/admin/productController");

router.get("/getall", getAllProducts);
router.post("/create", createProduct);
router.post("/update", update);

module.exports = router;
