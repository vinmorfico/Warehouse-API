const auth = require('../middlewares/auth');
const routes = require('express').Router();

routes.use('/users', auth, require('./users'));
routes.use('/products', auth, require('./products'));
routes.use('/category', auth, require('./category'));
routes.use('/auth', require('./auth'));

module.exports = routes;
