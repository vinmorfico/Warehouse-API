import express from 'express';
import { createServer } from 'http';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger';
import setupDb from './db/knex';
import io from './io';
import { errorHandler, newError } from './middlewares/error.middleware';
import routes from './routes/index';
import * as dotenv from 'dotenv';

require('express-async-errors');
dotenv.config();

const PORT = process.env.PORT || 3000;
const PATH_PUBLIC = path.join(__dirname, '/public');
const app = express();
const server = createServer();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);
app.use('/api-info', express.static(PATH_PUBLIC));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(newError);
app.use(errorHandler);

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
