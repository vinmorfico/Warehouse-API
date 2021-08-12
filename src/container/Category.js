const CategoryService = require('../servises/CategoryService');
const CategoryRepository = require('../repositories/CategoryRepository');
const CategoryController = require('../controllers/CategoryController')

const categoryRepo = new CategoryRepository();
const categoryService = new CategoryService(categoryRepo);
const categoryController = new CategoryController(categoryService);

module.exports = categoryController;
