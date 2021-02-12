const validateProductVariety = (req, res, next) => {
  if (!req.body.size || !req.body.size.trim()) {
    return res.status(400).json({
      message: 'You must specify a size',
      success: false
    });
  } else if (Number.isNaN(Number(req.body.size))) {
    return res.status(400).json({
      message: 'Your size must be a valid number',
      success: false
    });
  } else if (!req.body.color || !req.body.color.trim()) {
    return res.status(400).json({
      message: 'You must specify a color',
      success: false
    });
  } else if (!req.body.quantity || !req.body.quantity.trim()) {
    return res.status(400).json({
      message: 'You must specify a quantity',
      success: false
    });
  } else if (Number.isNaN(Number(req.body.quantity))) {
    return res.status(400).json({
      message: 'Your quantity must be a valid number',
      success: false
    });
  } else if (!req.body.price || !req.body.price.trim()) {
    return res.status(400).json({
      message: 'You must specify a price',
      success: false
    });
  } else if (Number.isNaN(Number(req.body.price))) {
    return res.status(400).json({
      message: 'Your price must be a valid number',
      success: false
    });
  } else {
    next();
  }
};

const validateProductVarietyId = (req, res, next) => {
  if (!req.params.varietyId) {
    return res.status(400).json({
      message: 'You must specify a variety ID',
      success: false
    });
  } else if (Number.isNaN(req.params.varietyId)) {
    return res.status(400).json({
      message: 'Your variety ID must be an integer',
      success: false
    });
  } else {
    next();
  }
};

const validateUpdateProductVariety = (req, res, next) => {
  if (req.body.size && !req.body.size.trim()) {
    return res.status(400).json({
      message: 'You must specify a size',
      success: false
    });
  } else if (req.body.size && Number.isNaN(Number(req.body.size))) {
    return res.status(400).json({
      message: 'Your size must be a valid number',
      success: false
    });
  } else if (req.body.color && !req.body.color.trim()) {
    return res.status(400).json({
      message: 'You must specify a color',
      success: false
    });
  } else if (req.body.quantity && !req.body.quantity.trim()) {
    return res.status(400).json({
      message: 'You must specify a quantity',
      success: false
    });
  } else if (req.body.quantity && Number.isNaN(Number(req.body.quantity))) {
    return res.status(400).json({
      message: 'Your quantity must be a valid number',
      success: false
    });
  } else if (req.body.price && !req.body.price.trim()) {
    return res.status(400).json({
      message: 'You must specify a price',
      success: false
    });
  } else if (req.body.price && Number.isNaN(Number(req.body.price))) {
    return res.status(400).json({
      message: 'Your price must be a valid number',
      success: false
    });
  } else {
    next();
  }
};

module.exports = {
  validateProductVariety,
  validateProductVarietyId,
  validateUpdateProductVariety
};