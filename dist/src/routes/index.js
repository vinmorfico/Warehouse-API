"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swAuthRouter = exports.swCategoryRouter = exports.swProductRouter = exports.swUserRouter = void 0;
const express_1 = require("express");
const auth_1 = __importDefault(require("../middlewares/auth"));
const info_1 = __importDefault(require("../middlewares/info"));
const swAuth_1 = require("./auth/swAuth");
const swCategory_1 = require("./category/swCategory");
const swProducts_1 = require("./products/swProducts");
const swUsers_1 = require("./users/swUsers");
const routes = (0, express_1.Router)();
routes.use('/users', auth_1.default, require('./users'));
routes.use('/products', auth_1.default, require('./products'), info_1.default);
routes.use('/category', auth_1.default, require('./category'));
routes.use('/auth', require('./auth'));
exports.default = routes;
exports.swUserRouter = {
    '/users': {
        get: {
            swGetUsers: swUsers_1.swGetUsers,
        },
        '/users/{id}': {
            get: {
                swGetUserById: swUsers_1.swGetUserById,
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
exports.swProductRouter = {
    '/products': {
        get: {
            swGetProducts: swProducts_1.swGetProducts,
        },
        post: {
            swPostProduct: swProducts_1.swPostProduct,
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
            swGetProductById: swProducts_1.swGetProductById,
        },
        put: {
            swPutProduct: swProducts_1.swPutProduct,
        },
        delete: {
            swDeleteProduct: swProducts_1.swDeleteProduct,
        },
    },
};
exports.swCategoryRouter = {
    '/category': {
        get: {
            swGetCategory: swCategory_1.swGetCategory,
        },
        post: {
            swPostCategory: swCategory_1.swPostCategory,
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
            swGetCategoryById: swCategory_1.swGetCategoryById,
        },
        put: {
            swPutCategory: swCategory_1.swPutCategory,
        },
        delete: {
            swDeleteCategory: swCategory_1.swDeleteCategory,
        },
    },
};
exports.swAuthRouter = {
    '/auth/login': {
        post: {
            swAuthLogin: swAuth_1.swAuthLogin,
        },
    },
    '/auth/refresh': {
        post: {
            swAuthRefresh: swAuth_1.swAuthRefresh,
        },
    },
    '/auth/register': {
        post: {
            swAuthRegister: swAuth_1.swAuthRegister,
        },
    },
};
//# sourceMappingURL=index.js.map