"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./src/routes/index");
const swagger = {
    openapi: '3.0.0',
    info: {
        title: 'Warehouse API',
        description: 'Project for product management',
        contact: {
            name: 'API Support',
            url: 'http://www.example.com/support',
            email: 'vinmorfico@gmail.com',
        },
        license: {
            name: 'MIT',
            url: 'https://opensource.org/licenses/MIT',
        },
        version: '2.0.0',
    },
    servers: [
        {
            url: 'http://localhost:{port}/{basePath}',
            description: 'Development server',
            variables: {
                port: {
                    default: '3000',
                },
                basePath: {
                    default: 'api',
                },
            },
        },
    ],
    paths: {
        swAuthRouter: index_1.swAuthRouter,
        swUserRouter: index_1.swUserRouter,
        swProductRouter: index_1.swProductRouter,
        swCategoryRouter: index_1.swCategoryRouter,
    },
    components: {
        shemas: {
            User: {
                required: ['id', 'name', 'login', 'password'],
                properties: {
                    id: {
                        type: 'integer',
                        uniqueItems: true,
                    },
                    name: {
                        type: 'string',
                    },
                    login: {
                        type: 'string',
                    },
                    password: {
                        type: 'string',
                    },
                    refreshToken: {
                        type: 'string',
                    },
                    products: {
                        type: 'array',
                        items: {
                            type: 'object',
                            $ref: '#/components/shemas/Product1',
                        },
                    },
                },
            },
            User1: {
                required: ['id', 'name', 'login', 'password'],
                properties: {
                    id: {
                        type: 'integer',
                        uniqueItems: true,
                    },
                    name: {
                        type: 'string',
                    },
                    login: {
                        type: 'string',
                    },
                    password: {
                        type: 'string',
                    },
                    refreshToken: {
                        type: 'string',
                    },
                },
            },
            loginUser: {
                required: ['login', 'password'],
                properties: {
                    login: {
                        type: 'string',
                    },
                    password: {
                        type: 'string',
                    },
                },
            },
            createNewToken: {
                required: ['token', 'refreshToken'],
                properties: {
                    token: {
                        type: 'string',
                    },
                    refreshToken: {
                        type: 'string',
                    },
                },
            },
            refreshToken: {
                required: ['refreshToken'],
                properties: {
                    refreshToken: {
                        type: 'string',
                    },
                },
            },
            createUser: {
                required: ['name', 'login', 'password'],
                properties: {
                    name: {
                        type: 'string',
                    },
                    login: {
                        type: 'string',
                    },
                    password: {
                        type: 'string',
                    },
                },
            },
            newUser: {
                required: ['name', 'login', 'password', 'refreshToken', 'token'],
                properties: {
                    id: {
                        type: 'integer',
                        uniqueItems: true,
                    },
                    name: {
                        type: 'string',
                    },
                    login: {
                        type: 'string',
                    },
                    password: {
                        type: 'string',
                    },
                    refreshToken: {
                        type: 'string',
                    },
                    token: {
                        type: 'string',
                    },
                },
            },
            Users: {
                type: 'array',
                items: {
                    type: 'object',
                    $ref: '#/components/shemas/User1',
                },
            },
            Product1: {
                required: ['id', 'name', 'description', 'price', 'amount_left'],
                properties: {
                    id: {
                        type: 'integer',
                        uniqueItems: true,
                    },
                    name: {
                        type: 'string',
                    },
                    description: {
                        type: 'string',
                    },
                    price: {
                        type: 'number',
                        format: 'double',
                    },
                    amount_left: {
                        type: 'integer',
                    },
                    category_id: {
                        type: 'integer',
                    },
                    users_id: {
                        type: 'integer',
                    },
                },
            },
            updateProduct: {
                properties: {
                    name: {
                        type: 'string',
                    },
                    description: {
                        type: 'string',
                    },
                    price: {
                        type: 'number',
                        format: 'double',
                    },
                    amount_left: {
                        type: 'integer',
                    },
                    category_id: {
                        type: 'integer',
                    },
                    users_id: {
                        type: 'integer',
                    },
                },
            },
            Product: {
                required: ['id', 'name', 'description', 'price', 'amount_left'],
                properties: {
                    id: {
                        type: 'integer',
                        uniqueItems: true,
                    },
                    name: {
                        type: 'string',
                    },
                    description: {
                        type: 'string',
                    },
                    price: {
                        type: 'number',
                        format: 'double',
                    },
                    amount_left: {
                        type: 'integer',
                    },
                    category_id: {
                        type: 'array',
                        items: {
                            type: 'object',
                            $ref: '#/components/shemas/category1',
                        },
                    },
                    users_id: {
                        type: 'array',
                        items: {
                            type: 'object',
                            $ref: '#/components/shemas/User1',
                        },
                    },
                },
            },
            Products: {
                type: 'array',
                items: {
                    type: 'object',
                    $ref: '#/components/shemas/Product1',
                },
            },
            category: {
                required: ['id', 'name'],
                properties: {
                    id: {
                        type: 'integer',
                        uniqueItems: true,
                    },
                    name: {
                        type: 'string',
                    },
                    products: {
                        type: 'array',
                        items: {
                            type: 'object',
                            $ref: '#/components/shemas/Product1',
                        },
                    },
                },
            },
            category1: {
                required: ['id', 'name'],
                properties: {
                    id: {
                        type: 'integer',
                        uniqueItems: true,
                    },
                    name: {
                        type: 'string',
                    },
                },
            },
            updateCategory: {
                properties: {
                    name: {
                        type: 'string',
                    },
                },
            },
            Category: {
                type: 'array',
                items: {
                    type: 'object',
                    $ref: '#/components/shemas/category1',
                },
            },
        },
        securitySchemes: {
            JWTAuth: {
                type: 'http',
                description: 'Enter JWT Bearer token',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
};
exports.default = swagger;
//# sourceMappingURL=swagger.js.map