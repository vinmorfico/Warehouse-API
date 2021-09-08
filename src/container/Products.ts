import ProductController from '../controllers/ProductController';
import ProductRepository from '../repositories/ProductRepository';
import ProductService from '../services/ProductService';

const productRepo = new ProductRepository();
const productService = new ProductService(productRepo);
const productController = new ProductController(productService);

export default productController;
