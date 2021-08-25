const { Router } = require('express');
const userController = require('../container/Users');
const { paramID } = require('../middlewares/shemas');
const validation = require('../middlewares/validation');
const router = Router();

router.get('/', userController.getAllUsers);

router.get('/:id', validation(paramID, 'params'), userController.getUser);

module.exports = router;
