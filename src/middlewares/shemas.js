const Joi = require('joi');
const schemas = {
  productsPOST: Joi.object().keys({
    name: Joi.string().required().alphanum(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    amount_left: Joi.number().integer().required(),
    category_id: Joi.string().required().alphanum(),
    users_id: Joi.string().required().alphanum(),
  }),

  categoryPOST: Joi.object().keys({
    name: Joi.string().alphanum(),
  }),

  loginPOST: Joi.object()
    .keys({
      login: Joi.string().required().alphanum(),
      password: Joi.string().required(),
    })
    .with('login', 'password'),

  refreshPOST: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),

  registerPOST: Joi.object()
    .keys({
      name: Joi.string().required().alphanum(),
      login: Joi.string().required().alphanum(),
      password: Joi.string().required(),
    })
    .with('login', ['password', 'login']),

  productsPUT: Joi.object().keys({
    name: Joi.string().alphanum(),
    description: Joi.string(),
    price: Joi.number(),
    amount_left: Joi.number().integer(),
    category_id: Joi.string().alphanum(),
    users_id: Joi.string().alphanum(),
  }),

  categoryPUT: Joi.object().keys({
    name: Joi.string().alphanum(),
    products: Joi.string().alphanum(),
  }),

  paramID: Joi.object().keys({
    id: Joi.string().required().alphanum(),
  }),
};

module.exports = schemas;
