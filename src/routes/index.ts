import { Router } from 'express';
import auth from '../middlewares/auth';
import info from '../middlewares/info';
import authRouter from './auth/auth';
import categoryRouter from './category/category';
import productsRouter from './products/products';
import usersRouter from './users/users';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/products', productsRouter, info);
routes.use('/category', auth, categoryRouter);
routes.use('/auth', authRouter);

export default routes;
