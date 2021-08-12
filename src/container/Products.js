const ProductService = require('../servises/ProductService');
const ProductRepository = require('../repositories/ProductRepository');
const ProductController = require('../controllers/ProductController')

const productRepo = new ProductRepository();
const productService = new ProductService(productRepo);
const productController = new ProductController(productService);

module.exports = productController;
