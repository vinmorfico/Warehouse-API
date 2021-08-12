const { Router } = require('express');
require('express-async-errors');
const userController = require('../container/Users');
const router = Router();

router.get('/', userController.getAllUsers);

router.get('/:id', userController.getUser);

module.exports = router;
