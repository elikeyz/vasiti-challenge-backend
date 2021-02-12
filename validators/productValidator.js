const validateProduct = (req, res, next) => {
  if (!req.body.product_name || !req.body.product_name.trim()) {
    return res.status(400).json({
      message: 'You must specify a product name',
      success: false
    });
  } else if (!req.body.product_description || !req.body.product_description.trim()) {
    return res.status(400).json({
      message: 'You must specify a product description',
      success: false
    });
  } else {
    next();
  }
};

const validateProductId = (req, res, next) => {
  if (!req.params.productId) {
    return res.status(400).json({
      message: 'You must specify a product ID',
      success: false
    });
  } else if (Number.isNaN(req.params.productId)) {
    return res.status(400).json({
      message: 'Your product ID must be an integer',
      success: false
    });
  } else {
    next();
  }
};

const validateUpdateProduct = (req, res, next) => {
  if (req.body.product_name && !req.body.product_name.trim()) {
    return res.status(400).json({
      message: 'Your product name must not be empty',
      success: false
    });
  } else if (req.body.product_description && !req.body.product_description.trim()) {
    return res.status(400).json({
      message: 'Your product description must not be empty',
      success: false
    });
  } else {
    next();
  }
};

module.exports = {
  validateProduct,
  validateProductId,
  validateUpdateProduct
}