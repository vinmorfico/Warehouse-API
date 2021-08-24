const createHttpError = require('http-errors');

exports.newError = (req, _res, next) => {
  if (req.method !== 'GET') {
    next(createHttpError(405));
    return;
  }
  next(createHttpError(404));
};

exports.errorHandlerMiddleware = (err, _req, res, _next) => {
  res.status(err.status || 500);
  res.json({ message: err.message });
};
