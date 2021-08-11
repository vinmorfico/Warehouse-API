const routes = require('express').Router();

routes.use('/users', require('./users'));
routes.use('/products', require('./products'));
routes.use('/category', require('./category'));

module.exports = routes;
