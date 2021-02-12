const { Router } = require('express');
const { addProductVariety } = require('../controllers/productVarietyController');
const { validateProductVariety } = require('../validators/productVarietyValidator');
const { validateProductId } = require('../validators/productValidator');
const multer = require('../multer');

const router = Router();

router.post('/', multer.array('images'), validateProductId, validateProductVariety, addProductVariety);

module.exports = router;