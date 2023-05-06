const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  // discount: {
  //   type: String,
  //   required: true,
  // },
  description: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
