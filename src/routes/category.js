const { Router } = require('express');
const categoryController = require('../container/Category');
const { categoryPOST, categoryPUT, paramID } = require('../middlewares/shemas');
const validation = require('../middlewares/validation');
const router = Router();

router.get('/', categoryController.getAllCategory);

router.get('/:id', validation(paramID, 'params'), categoryController.getCategoryById);

router.post('/', validation(categoryPOST, 'body'), categoryController.createNewCategory);

router.put('/:id', validation(paramID, 'params'), validation(categoryPUT, 'body'), categoryController.updateCategory);

router.delete('/:id', validation(paramID, 'params'), categoryController.deleteCategory);

module.exports = router;
