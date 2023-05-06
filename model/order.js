const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    orderDate: {
      type: String,
      required: true,
    },
    paymentType: {
      type: String,
      required: true,
    },
    shippedDate: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
