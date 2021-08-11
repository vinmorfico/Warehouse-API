const express = require('express');
const setupDb = require('./db/knex');
const createHttpError = require('http-errors');
const errorHandlerMiddleware = require('./middlewares/error.middleware');
const routes = require('./routes/index');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use('/api', routes);

app.use(express.urlencoded({ extended: true }));

app.use((req, _res, next) => {
  if (req.method !== 'GET') {
    next(createHttpError(405));
    return;
  }

  next(createHttpError(404));
});

app.use(errorHandlerMiddleware);

async function start() {
  try {
    await setupDb();
    app.listen(PORT, () =>
      console.log(`Server is listening at http://localhost:${PORT}`)
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
start();
