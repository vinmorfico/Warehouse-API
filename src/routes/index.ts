import { Router } from 'express';
import auth from '../middlewares/auth';
import info from '../middlewares/info';
import { swAuthLogin, swAuthRefresh, swAuthRegister } from './auth/swAuth';
import {
  swDeleteCategory,
  swGetCategory,
  swGetCategoryById,
  swPostCategory,
  swPutCategory,
} from './category/swCategory';
import {
  swDeleteProduct,
  swGetProductById,
  swGetProducts,
  swPostProduct,
  swPutProduct,
} from './products/swProducts';
import { swGetUserById, swGetUsers } from './users/swUsers';

const routes = Router();

routes.use('/users', auth, require('./users'));
routes.use('/products', auth, require('./products'), info);
routes.use('/category', auth, require('./category'));
routes.use('/auth', require('./auth'));

export default routes;

export const swUserRouter = {
  '/users': {
    get: {
      swGetUsers,
    },
    '/users/{id}': {
      get: {
        swGetUserById,
      },
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          description: 'ID of user that we want to find',
          type: 'integer',
        },
      ],
    },
  },
};

export const swProductRouter = {
  '/products': {
    get: {
      swGetProducts,
    },
    post: {
      swPostProduct,
    },
  },
  '/products/{id}': {
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        description: 'ID of product that we want to find',
        type: 'integer',
      },
    ],
    get: {
      swGetProductById,
    },
    put: {
      swPutProduct,
    },
    delete: {
      swDeleteProduct,
    },
  },
};

export const swCategoryRouter = {
  '/category': {
    get: {
      swGetCategory,
    },
    post: {
      swPostCategory,
    },
  },
  '/category/{id}': {
    parameters: [
      {
        name: 'id',
        in: 'path',
        required: true,
        description: 'ID of category that we want to find',
        type: 'integer',
      },
    ],
    get: {
      swGetCategoryById,
    },
    put: {
      swPutCategory,
    },
    delete: {
      swDeleteCategory,
    },
  },
};

export const swAuthRouter = {
  '/auth/login': {
    post: {
      swAuthLogin,
    },
  },
  '/auth/refresh': {
    post: {
      swAuthRefresh,
    },
  },
  '/auth/register': {
    post: {
      swAuthRegister,
    },
  },
};
