const { Router } = require('express');
require('express-async-errors');
const {
  getAllCategory,
  getCategoryById,
  createNewCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/category/index');
const { categoryService } = require('../container/index');

  const router = Router();

  router.get('/', getAllCategory(categoryService));
  
  router.get('/:id', getCategoryById(categoryService));
  
  router.post('/', createNewCategory(categoryService));
  
  router.put('/:id', updateCategory(categoryService));
  
  router.delete('/:id', deleteCategory(categoryService));

module.exports = router;
