import { NextFunction, Request, Response } from 'express';
import createHttpError, { HttpError } from 'http-errors';

export const newError = (req: Request, _res: Response, next: NextFunction) => {
  if (req.method !== 'GET') {
    next(createHttpError(405));
    return;
  }
  next(createHttpError(404));
};

export const errorHandler = (
  err: HttpError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  res.status(err.status || 500);
  res.json({ message: err.message });
};
