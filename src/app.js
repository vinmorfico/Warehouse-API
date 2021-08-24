const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('./io');
const path = require('path');
const setupDb = require('./db/knex');
const {
  errorHandlerMiddleware,
  newError,
} = require('./middlewares/error.middleware');
const routes = require('./routes/index');
const swaggerUi = require('swagger-ui-express'),
  swaggerDocument = require('../swagger.json');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const PATH_PUBLIC = path.join(__dirname, '/public');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(PATH_PUBLIC));
app.use('/api', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(newError);
app.use(errorHandlerMiddleware);

async function start() {
  try {
    await setupDb();
    io.attach(server);
    server.listen(PORT, () =>
      console.log(`Server is listening at http://localhost:${PORT}`)
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
start();
