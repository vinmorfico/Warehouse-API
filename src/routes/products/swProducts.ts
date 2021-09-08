export const swGetProducts = {
  tags: ['Products'],
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
            $ref: '#/components/shemas/Products',
          },
        },
      },
    },
  },
};

export const swGetProductById = {
  tags: ['Products'],
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
            $ref: '#/components/shemas/Product',
          },
        },
      },
    },
  },
};

export const swPostProduct = {
  tags: ['Products'],
  summary: 'Create new product in system',
  security: [
    {
      JWTAuth: [],
    },
  ],
  requestBody: {
    description: 'Product that we want to create',
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/shemas/updateProduct',
        },
      },
    },
  },
  responses: {
    '201': {
      description: 'New product is created',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/shemas/Product1',
          },
        },
      },
    },
  },
};

export const swPutProduct = {
  summary: 'Update product with given ID',
  security: [
    {
      JWTAuth: [],
    },
  ],
  tags: ['Products'],
  requestBody: {
    description: 'Product with new values of properties',
    required: true,
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/shemas/updateProduct',
        },
      },
    },
  },
  responses: {
    '200': {
      description: 'Product is updated',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/shemas/Product1',
          },
        },
      },
    },
  },
};

export const swDeleteProduct = {
  summary: 'Delete product with given ID',
  security: [
    {
      JWTAuth: [],
    },
  ],
  tags: ['Products'],
  responses: {
    '200': {
      description: 'Product is deleted',
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
