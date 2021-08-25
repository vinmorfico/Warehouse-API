const { Router } = require('express');
const productController = require('../container/Products');
const { productsPOST, productsPUT, paramID } = require('../middlewares/shemas');
const validation = require('../middlewares/validation');
const router = Router();

router.get('/', productController.getAllProducts);

router.get('/:id', validation(paramID, 'params'), productController.getProductById);

router.post('/', validation(productsPOST, 'body'), productController.createNewProduct);

router.put('/:id', validation(paramID, 'params'), validation(productsPUT, 'body'), productController.updateProduct);

router.delete('/:id', validation(paramID, 'params'), productController.deleteProduct);

module.exports = router;
