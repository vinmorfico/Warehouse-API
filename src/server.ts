import express from 'express';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';
import setupDb from './db/knex';
import { errorHandler, newError } from './middlewares/error.middleware';
import routes from './routes/index';

function createServer() {
  const app = express();
  app.set('port', process.env.PORT || 3000);
  setupDb();
  const PATH_PUBLIC = path.join(__dirname, '/public');

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/api', routes);
  app.use('/api-info', express.static(PATH_PUBLIC));
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use(newError);
  app.use(errorHandler);

  return app;
}

export default createServer;
