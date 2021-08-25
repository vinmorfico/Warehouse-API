const Joi = require('joi');
const schemas = {
  
  productsPOST: Joi.object().keys({
    name: Joi.string().required().alphanum(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    amount_left: Joi.number().required(),
    category_id: Joi.number().min(1).required(),
    users_id: Joi.number().min(1).required(),
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
      login: Joi.string().required(),
      password: Joi.string().required(),
    })
    .with('login', ['password', 'login']),

  productsPUT: Joi.object().keys({
    name: Joi.string().alphanum(),
    description: Joi.string(),
    price: Joi.number(),
    amount_left: Joi.number(),
    category_id: Joi.number().min(1),
    users_id: Joi.number().min(1),
  }),

  categoryPUT: Joi.object().keys({
    name: Joi.string(),
  }),

  paramID: Joi.object().keys({
    id: Joi.number().min(1).required(),
  }),
};

module.exports = schemas;
