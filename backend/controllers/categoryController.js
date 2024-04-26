const { successResponse } = require("../utils/globalSuccessResponse");
const Category = require("../models/categoryModel");

exports.createCategory = async (req, res, next) => {
  try {
    const category = await Category.create(req.body);
    return res.send(successResponse(201, "success", category));
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      err: error,
    });
  }
};
exports.updateCategory = async (req, res, next) => {
  try {
    const categoryId = await Category.findById(req.params.id);
    if (!categoryId) {
      return res.status(400).json({
        status: "fail",
        message: "Category was not found!!!",
      });
    }
    const updateCategory = await Category.findByIdAndUpdate(
      categoryId,
      req.body,
      { new: true, runValidators: true }
    );
    return res.send(successResponse(201, "success", updateCategory));
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      err: error,
    });
  }
};
exports.getCategory = async (req, res, next) => {
  try {
    const categories = await Category.find();
    return res.send(successResponse(200, "success", categories));
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      err: error,
    });
  }
};
exports.deleteCategory = async (req, res, next) => {
  try {
    const categoryId = await Category.findById(req.params.id);
    if (!categoryId) {
      return res.status(400).json({
        status: "fail",
        message: "Category was not found!!!",
      });
    }
    await Category.findByIdAndUpdate(categoryId, { isActive: req.body });
    return res.send(204, "success");
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      err: error,
    });
  }
};
