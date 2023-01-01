const express = require("express");
const router = express.Router();
const {
  createCategory,
  getAllCategories,
} = require("../../controllers/admin/categoryController");

router.post("/create", createCategory);
router.get("/getall", getAllCategories);

module.exports = router;
