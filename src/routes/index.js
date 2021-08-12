const auth = require('../middlewares/auth');
const routes = require('express').Router();

routes.use('/users', auth, require('./users'));
routes.use('/products', auth, require('./products'));
routes.use('/category', auth, require('./category'));
routes.use('/register', require('./register'));
routes.use('/login', require('./login'));
routes.use('/refresh', require('./refresh'));

module.exports = routes;
