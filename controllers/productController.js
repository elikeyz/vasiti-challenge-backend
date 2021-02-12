const { Product, ProductVariety } = require('../models');

const addProduct = async (req, res) => {
  try {
    const result = await Product.findOne({
      where: { product_name: req.body.product_name }
    });

    if (result) return res.status(409).json({ message: 'Product already exists', success: false });

    const data = await Product.create({ ...req.body });

    return res.status(201).json({
      message: 'Product added successfully',
      success: true,
      data
    });
  } catch ({ message }) {
    return res.status(500).json({
      message,
      success: false
    });
  }
};

const getProducts = async (req, res) => {
  try {
    const data = await Product.findAll({ include: [ProductVariety] });

    return res.status(200).json({
      message: 'Products gotten successfully',
      success: true,
      data
    });
  } catch ({ message }) {
    return res.status(500).json({
      message,
      success: false
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const data = await Product.findOne({
      include: [ProductVariety],
      where: { id: req.params.productId }
    });

    if (!data) return res.status(404).json({
      message: 'The product specified does not exist',
      success: false
    });

    return res.status(200).json({
      message: 'Product gotten successfully',
      success: true,
      data: data
    });
  } catch ({ message }) {
    return res.status(500).json({
      message,
      success: false
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const result = await Product.findOne({
      include: [ProductVariety],
      where: { id: req.params.productId }
    });

    if (!result) return res.status(404).json({
      message: 'The product specified does not exist',
      success: false
    });

    await Product.update(req.body, { where: { id: req.params.productId } })

    return res.status(200).json({
      message: 'Product updated successfully',
      success: true
    });
  } catch ({ message }) {
    return res.status(500).json({
      message,
      success: false
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const result = await Product.findOne({
      include: [ProductVariety],
      where: { id: req.params.productId }
    });

    if (!result) return res.status(404).json({
      message: 'The product specified does not exist',
      success: false
    });

    await Product.destroy({ where: { id: req.params.productId } });

    return res.status(200).json({
      message: 'Product deleted successfully',
      success: true
    });
  } catch ({ message }) {
    return res.status(500).json({
      message,
      success: false
    });
  }
};

module.exports = {
  addProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct
}