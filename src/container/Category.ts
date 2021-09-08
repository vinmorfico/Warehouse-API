import CategoryController from '../controllers/CategoryController';
import CategoryRepository from '../repositories/CategoryRepository';
import CategoryService from '../services/CategoryService';

const categoryRepo = new CategoryRepository();
const categoryService = new CategoryService(categoryRepo);
const categoryController = new CategoryController(categoryService);

export default categoryController;
