const CategoryService = require('../servises/CategoryService');
const CategoryRepository = require('../repositories/CategoryRepository');

const categoryRepo = new CategoryRepository();
const categoryService = new CategoryService(categoryRepo);

module.exports = categoryService;
