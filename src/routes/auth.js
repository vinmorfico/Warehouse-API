const { Router } = require('express');
require('express-async-errors');
const userController = require('../container/Users');
const router = Router();

router.post('/login', userController.login);

router.post('/refresh', userController.refreshToken);

router.post('/register', userController.registerNewUser);

module.exports = router;
