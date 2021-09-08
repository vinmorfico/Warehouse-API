export const swGetUsers = {
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

export const swGetUserById = {
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