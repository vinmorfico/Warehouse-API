const { Router } = require('express');
const router = Router();
require('express-async-errors');
const { registerNewUser } = require('../controllers/user/index');
const userService = require('../container/Users');

router.post('/', registerNewUser(userService));

module.exports = router;
