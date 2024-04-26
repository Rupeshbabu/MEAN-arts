const { successResponse } = require("../utils/globalSuccessResponse");
const Product = require("../models/productModel");

exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    return res.send(successResponse(201, "success", product));
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      err: error,
    });
  }
};
exports.updateProduct = async (req, res, next) => {
  try {
    const productId = Product.findById(req.params.id);
    if (!productId) {
      return res.status(400).json({
        status: "fail",
        message: "Product was not found!!!",
      });
    }
    const updateProduct = await Product.findByIdAndUpdate(productId, req.body, {
      new: true,
      runValidators: true,
    });
    return res.send(successResponse(201, "success", updateProduct));
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      err: error,
    });
  }
};
exports.getProduct = async (req, res, next) => {
  try {
    const pro = await Product.find({});

    return res.send(successResponse(200, "success", pro));
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      err: error,
    });
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const productId = Product.findById(req.params.id);
    if (!productId) {
      return res.status(400).json({
        status: "fail",
        message: "Product was not found!!!",
      });
    }
    await Product.findByIdAndUpdate(productId, { isActive: req.body });
    return res.send(successResponse(204, "success"));
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      err: error,
    });
  }
};
