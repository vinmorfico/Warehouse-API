"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swDeleteCategory = exports.swPutCategory = exports.swPostCategory = exports.swGetCategoryById = exports.swGetCategory = void 0;
exports.swGetCategory = {
    tags: ['Category'],
    summary: 'Get all products in system',
    security: [
        {
            JWTAuth: [],
        },
    ],
    responses: {
        '200': {
            description: 'OK',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/shemas/Category',
                    },
                },
            },
        },
    },
};
exports.swGetCategoryById = {
    tags: ['Category'],
    summary: 'Get products by id in system',
    security: [
        {
            JWTAuth: [],
        },
    ],
    responses: {
        '200': {
            description: 'OK',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/shemas/category',
                    },
                },
            },
        },
    },
};
exports.swPostCategory = {
    tags: ['Category'],
    summary: 'Create new user in system',
    security: [
        {
            JWTAuth: [],
        },
    ],
    requestBody: {
        description: 'Category that we want to create',
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/shemas/updateCategory',
                },
            },
        },
    },
    produces: ['application/json'],
    responses: {
        '201': {
            description: 'New сategory is created',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/shemas/category1',
                    },
                },
            },
        },
    },
};
exports.swPutCategory = {
    summary: 'Update category with given ID',
    security: [
        {
            JWTAuth: [],
        },
    ],
    tags: ['Category'],
    requestBody: {
        description: 'Category with new values of properties',
        content: {
            'application/json': {
                schema: {
                    $ref: '#/components/shemas/updateCategory',
                },
            },
        },
    },
    responses: {
        '200': {
            description: 'Category is updated',
            schema: {
                $ref: '#/components/shemas/category1',
            },
        },
    },
};
exports.swDeleteCategory = {
    summary: 'Category user with given ID',
    security: [
        {
            JWTAuth: [],
        },
    ],
    tags: ['Category'],
    responses: {
        '200': {
            description: 'Category is deleted',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            status: {
                                type: 'string',
                            },
                        },
                    },
                },
            },
        },
    },
};
//# sourceMappingURL=swCategory.js.map