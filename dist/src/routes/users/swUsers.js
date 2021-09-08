"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swGetUserById = exports.swGetUsers = void 0;
exports.swGetUsers = {
    security: [
        {
            JWTAuth: [],
        },
    ],
    tags: ['Users'],
    summary: 'Get all users in system',
    responses: {
        '200': {
            description: 'OK',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/shemas/Users',
                    },
                },
            },
        },
    },
};
exports.swGetUserById = {
    tags: ['Users'],
    summary: 'Get user by id in system',
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
                        $ref: '#/components/shemas/User',
                    },
                },
            },
        },
    },
};
//# sourceMappingURL=swUsers.js.map