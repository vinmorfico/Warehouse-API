import { NextFunction, Request, Response } from 'express';
import { Prop } from '../enums/enum.property';

const validation = (schema: any, property: Prop) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[property]);
    const valid = error == null;

    if (valid) {
      next();
    } else {
      console.log(error.details.map((e: any) => e.message));
      res.status(422).json({ message: 'Invalid request' });
    }
  };
};

export default validation;
