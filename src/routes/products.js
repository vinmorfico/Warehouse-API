const { Router } = require('express');
require('express-async-errors');
const productController = require('../container/Products');
const router = Router();

router.get('/', productController.getAllProducts);

router.get('/:id', productController.getProductById);

router.post('/', productController.createNewProduct);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;
