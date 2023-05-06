const productController = require("../controller/product");
const express = require("express");
const router = express.Router();

router.post("/createNewProduct", productController.createNewProduct);

router.get("/retrieveAllProducts", productController.retrieveAllProducts);

router.get("/retrieveProductById/:id", productController.retrieveProductById);

router.put("/updateProductById/:id", productController.updateProductById);

router.delete("/deleteProductById/:id", productController.deleteProductById);

module.exports = router;
