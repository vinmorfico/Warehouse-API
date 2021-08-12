const { Router } = require('express');
const router = Router();
require('express-async-errors');
const { refreshToken } = require('../controllers/user/index');
const userService = require('../container/Users');

router.post('/', refreshToken(userService));

module.exports = router;
