const io = require('../io');
const fs = require('fs');

const info = (req, _res, next) => {
  const ent = req.baseUrl.split('/')[2];
  const entity =
    ent.charAt(0).toUpperCase() + ent.substr(0, ent.length - 1).slice(1);
  const id = req.url.split('/')[1];

  switch (req.method) {
    case 'POST':
      fs.appendFileSync(
        'log.txt',
        `New ${entity} has been created ${JSON.stringify(req.newEntity)}\n`,
        'utf8'
      );
      io.emit(`create${entity}`, req.newEntity);
      break;
    case 'PUT':
      fs.appendFileSync(
        'log.txt',
        `${entity} with ID ${id} has been changed ${JSON.stringify(
          req.body
        )}\n`,
        'utf8'
      );
      console.log(`edit${entity}`);
      io.emit(`edit${entity}`, id, req.body);
      break;
    case 'DELETE':
      fs.appendFileSync(
        'log.txt',
        `${entity} with ID ${id} has been deleted\n`,
        'utf8'
      );
      io.emit(`delete${entity}`, id);
      break;
  }
  next();
};

module.exports = info;
