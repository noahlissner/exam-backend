const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  updatePublished,
} = require("../controllers/productController");

router.get("/getall", getAllProducts);
router.post("/create", createProduct);
router.post("/update/published", updatePublished);

module.exports = router;
