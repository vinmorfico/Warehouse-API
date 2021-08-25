const { Router } = require('express');
const userController = require('../container/Users');
const {
  loginPOST,
  refreshPOST,
  registerPOST,
} = require('../middlewares/shemas');
const validation = require('../middlewares/validation');
const router = Router();

router.post('/login', validation(loginPOST), userController.login);

router.post('/refresh', validation(refreshPOST), userController.refreshToken);

router.post('/register', validation(registerPOST), userController.registerNewUser);

module.exports = router;
