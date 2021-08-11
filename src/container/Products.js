const ProductService = require('../servises/ProductService');
const ProductRepository = require('../repositories/ProductRepository');

const productRepo = new ProductRepository();
const productService = new ProductService(productRepo);

module.exports = productService;
