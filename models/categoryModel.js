const mongoose = require("mongoose");

const catergoryModel = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Category", catergoryModel);
