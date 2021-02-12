const { Product, ProductVariety } = require('../models');
const uploadImages = require('../uploadImages');

const addProductVariety = async (req, res) => {
  try {
    const result = await Product.findOne({
      include: [ProductVariety],
      where: { id: req.params.productId }
    });

    if (!result) return res.status(404).json({
      message: 'The product specified does not exist',
      success: false
    });

    if (req.files.length > 0) {
      const res = await uploadImages(req.files);
      req.body.images = res.join('|');
    }

    req.body.product_id = req.params.productId;
    const data = await ProductVariety.create(req.body);

    return res.status(201).json({
      message: 'Product variety added successfully',
      success: true,
      data
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: err.message,
      success: false
    });
  }
};

const updateProductVariety = async (req, res) => {
  try {
    const product = await Product.findOne({
      include: [ProductVariety],
      where: { id: req.params.productId }
    });

    if (!product) return res.status(404).json({
      message: 'The product specified does not exist',
      success: false
    });

    const variety = await ProductVariety.findOne({
      where: { id: req.params.varietyId }
    });

    if (!variety) return res.status(404).json({
      message: 'The product variety specified does not exist',
      success: false
    });

    if (req.files.length > 0) {
      const res = await uploadImages(req.files);
      req.body.images = res.join('|');
    }

    await ProductVariety.update(req.body, { where: { id: req.params.varietyId } });

    return res.status(200).json({
      message: 'Product variety updated successfully',
      success: true
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: err.message,
      success: false
    });
  }
};

const deleteProductVariety = async (req, res) => {
  try {
    const product = await Product.findOne({
      include: [ProductVariety],
      where: { id: req.params.productId }
    });

    if (!product) return res.status(404).json({
      message: 'The product specified does not exist',
      success: false
    });

    const variety = await ProductVariety.findOne({
      where: { id: req.params.varietyId }
    });

    if (!variety) return res.status(404).json({
      message: 'The product variety specified does not exist',
      success: false
    });

    await ProductVariety.destroy({ where: { id: req.params.varietyId } });

    return res.status(200).json({
      message: 'Product variety deleted successfully',
      success: true
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: err.message,
      success: false
    });
  }
};

module.exports = {
  addProductVariety,
  updateProductVariety,
  deleteProductVariety
};