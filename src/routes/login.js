const { Router } = require('express');
const router = Router();
require('express-async-errors');
const { login } = require('../controllers/user/index');
const userService = require('../container/Users');

router.post('/', login(userService));


module.exports = router;
