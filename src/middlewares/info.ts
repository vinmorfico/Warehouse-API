import { NextFunction, Request, Response } from 'express';
import fs from 'fs';
import io from '../io';

const info = (req: Request, _res: Response, next: NextFunction) => {
  const ent = req.baseUrl.split('/')[2];
  const entity =
    ent.charAt(0).toUpperCase() + ent.substr(0, ent.length - 1).slice(1);
  const id = req.url.split('/')[1];

  switch (req.method) {
    case 'POST':
      fs.appendFileSync(
        'log.txt',
        `New ${entity} has been created ${JSON.stringify(req.body.product)}\n`,
        'utf8'
      );
      io.emit(`create${entity}`, req.body.product);
      break;
    case 'PUT':
      fs.appendFileSync(
        'log.txt',
        `${entity} with ID ${id} has been changed ${JSON.stringify(
          req.body
        )}\n`,
        'utf8'
      );
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

export default info;
