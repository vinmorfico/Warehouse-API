export const swAuthLogin = {
  tags: ['Auth'],
  summary: 'Login user in system',
  security: [],
  requestBody: {
    description: 'Credential',
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/shemas/loginUser',
        },
      },
    },
  },
  produces: ['application/json'],
  responses: {
    '200': {
      description: 'Token',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/shemas/createNewToken',
          },
        },
      },
    },
  },
};

export const swAuthRefresh = {
  tags: ['Auth'],
  summary: 'Create new token',
  security: [],
  requestBody: {
    description: 'refreshToken',
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/shemas/refreshToken',
        },
      },
    },
  },
  produces: ['application/json'],
  responses: {
    '200': {
      description: 'Token',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/shemas/createNewToken',
          },
        },
      },
    },
  },
};

export const swAuthRegister = {
  tags: ['Auth'],
  summary: 'Create new user in system',
  security: [],
  requestBody: {
    description: 'Credential',
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/shemas/createUser',
        },
      },
    },
  },
  responses: {
    '201': {
      description: 'New user is created',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/shemas/newUser',
          },
        },
      },
    },
  },
};
