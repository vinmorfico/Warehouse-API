const express = require('express');
const app = express();
//const server = require('http').createServer(app);
//const { Server } = require("socket.io");
//const io = new Server(server);
const setupDb = require('./db/knex');
const createHttpError = require('http-errors');
const errorHandlerMiddleware = require('./middlewares/error.middleware');
const routes = require('./routes/index');
const swaggerUi = require('swagger-ui-express'),
  swaggerDocument = require('../swagger.json');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use((req, _res, next) => {
  if (req.method !== 'GET') {
    next(createHttpError(405));
    return;
  }

  next(createHttpError(404));
});
app.use(errorHandlerMiddleware);

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

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
