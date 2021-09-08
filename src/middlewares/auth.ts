import * as dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
dotenv.config();

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = (() => {
    let token;
    if (req.headers['authorization']) {
      token = req.headers['authorization'].split(' ')[1];
    } else {
      token =
        req.body.token || req.query.token || req.headers['x-access-token'];
    }
    return token;
  })();

  if (!token) {
    return res.status(403).send('A token is required for authentication');
  }
  try {
    jwt.verify(token, process.env.TOKEN_KEY as string);
  } catch (err) {
    return res.status(401).send('Invalid Token');
  }
  return next();
};

export default verifyToken;
