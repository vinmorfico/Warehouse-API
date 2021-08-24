const auth = require('../middlewares/auth');
const info = require('../middlewares/info');
const routes = require('express').Router();

routes.use('/users', auth, require('./users'));
routes.use('/products', auth, require('./products'), info);
routes.use('/category', auth, require('./category'));
routes.use('/auth', require('./auth'));
routes.use('/info', require('./info'));

module.exports = routes;
