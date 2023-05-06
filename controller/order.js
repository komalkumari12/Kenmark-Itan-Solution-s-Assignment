const Order = require("../model/order");

exports.createOrder = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);

    return res.status(200).json({
      message: "Created new Order",
      data: newOrder,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.retrieveAllOrders = async (req, res) => {
  try {
    const retrieveOrders = await Order.find({});

    if (!retrieveOrders) {
      return res.status(404).json({
        message: "Could not retrieve all Orders",
      });
    }

    return res.status(200).json({
      message: "All Orders retrieved",
      data: retrieveOrders,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.retrieveOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    const retrieveOrder = await Order.findById(id);

    if (!retrieveOrder) {
      return res.status(404).json({
        message: "Could not retrieve Order  by Id",
      });
    }

    return res.status(200).json({
      message: "Order retrieved by id",
      data: retrieveOrder,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
