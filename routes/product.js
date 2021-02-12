const { Router } = require('express');
const { addProduct, getProducts, getProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const { validateProduct, validateProductId, validateUpdateProduct } = require('../validators/productValidator');
const { addProductVariety, updateProductVariety, deleteProductVariety } = require('../controllers/productVarietyController');
const { validateProductVariety, validateProductVarietyId, validateUpdateProductVariety } = require('../validators/productVarietyValidator');
const multer = require('../multer');

const router = Router();

router.get('/', getProducts);
router.get('/:productId', validateProductId, getProduct);
router.post('/', validateProduct, addProduct);
router.patch('/:productId', validateProductId, validateUpdateProduct, updateProduct);
router.delete('/:productId', validateProductId, deleteProduct);
router.post('/:productId/varieties', multer.array('images'), validateProductId, validateProductVariety, addProductVariety);
router.patch('/:productId/varieties/:varietyId', multer.array('images'), validateProductId, validateProductVarietyId, validateUpdateProductVariety, updateProductVariety);
router.delete('/:productId/varieties/:varietyId', validateProductId, validateProductVarietyId, deleteProductVariety);

module.exports = router;