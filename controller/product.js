const Product = require("../model/product");

exports.createNewProduct = async (req, res) => {
  try {
    // console.log(req.body);
    const newProduct = await Product.create(req.body);

    if (!newProduct) {
      return res.status(404).json({
        message: "Product cannot be created",
      });
    }

    return res.status(200).json({
      message: "New product created",
      data: newProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server error",
      error: error.message,
    });
  }
};

exports.retrieveAllProducts = async (req, res) => {
  try {
    const retrieveProducts = await Product.find({});

    if (!retrieveProducts) {
      return res.status(404).json({
        message: "Could not retrieve all products",
      });
    }

    return res.status(200).json({
      message: "Retrieved all Products",
      data: retrieveProducts,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.retrieveProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const retrieveProducts = await Product.findById(id);

    if (!retrieveProducts) {
      return res.status(404).json({
        message: "Could not retrieve  products",
      });
    }

    return res.status(200).json({
      message: "Retrieved Products by id",
      data: retrieveProducts,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.updateProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const updateProducts = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updateProducts) {
      return res.status(404).json({
        message: "Could not find product",
      });
    }

    return res.status(200).json({
      message: "Updated Product by id",
      data: updateProducts,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const retrieveProducts = await Product.findByIdAndDelete(id);

    if (!retrieveProducts) {
      return res.status(404).json({
        message: "Could not find product",
      });
    }

    //data before updation is visible here
    return res.status(200).json({
      message: "Deleted Product by id",
      data: retrieveProducts,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
