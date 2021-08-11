const { Router } = require('express');
const router = Router();
require('express-async-errors');
const { getAllUser, getUser } = require('../controllers/user/index');
const userService = require('../container/Users');

router.get('/', getAllUser(userService));

router.get('/:id', getUser(userService));

module.exports = router;
