const { Router } = require('express');
const productRoute = require('./product');

const router = Router();

router.use('/products', productRoute);

module.exports = router;