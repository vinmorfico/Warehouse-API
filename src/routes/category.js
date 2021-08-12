const { Router } = require('express');
require('express-async-errors');
const categoryController = require('../container/Category');

const router = Router();

router.get('/', categoryController.getAllCategory);

router.get('/:id', categoryController.getCategoryById);

router.post('/', categoryController.createNewCategory);

router.put('/:id', categoryController.updateCategory);

router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
