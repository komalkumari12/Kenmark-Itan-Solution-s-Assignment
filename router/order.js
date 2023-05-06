const express = require("express");
const router = express.Router();
const orderController = require("../controller/order");

router.post("/createOrder", orderController.createOrder);

router.get("/retrieveAllOrders", orderController.retrieveAllOrders);

router.get("/retrieveOrderById/:id", orderController.retrieveOrderById);

module.exports = router;
