const { Router } = require('express');
const router = Router();
require('express-async-errors');
const {
  createNewProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} = require('../controllers/products/index');
const productService = require('../container/Products');

router.get('/', getAllProducts(productService));

router.get('/:id', getProductById(productService));

router.post('/', createNewProduct(productService));

router.put('/:id', updateProduct(productService));

router.delete('/:id', deleteProduct(productService));

module.exports = router;
