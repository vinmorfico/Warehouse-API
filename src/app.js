const express = require('express');
const setupDb = require('./db/knex');
const createHttpError = require('http-errors');
const errorHandlerMiddleware = require('./middlewares/error.middleware');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use('/users', require('./routes/users').router);
app.use('/products', require('./routes/products').router);
app.use('/products_category', require('./routes/products_category').router);

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
