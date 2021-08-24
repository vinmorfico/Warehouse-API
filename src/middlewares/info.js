const io = require('../io');
const fs = require('fs');

const info = (req, _res, next) => {
  switch (req.method) {
    case 'POST':
        fs.appendFileSync(
          'log.txt',
          `New product has been created ${JSON.stringify(req.product)}\n`,
          'utf8'
        );  
      io.emit('createProduct', req.product);
      break;
    case 'PUT':
      fs.appendFileSync(
        'log.txt',
        `product with ID ${
          req.idForMiddleware
        } has been changed ${JSON.stringify(req.body)}\n`,
        'utf8'
      );
      io.emit('editProduct', req.idForMiddleware, req.body);
      break;
    case 'DELETE':
      fs.appendFileSync(
        'log.txt',
        `product with ID ${req.idForMiddleware} has been deleted\n`,
        'utf8'
      );
      io.emit('deleteProduct', req.idForMiddleware);
      break;
  }
  next();
};

module.exports = info;
