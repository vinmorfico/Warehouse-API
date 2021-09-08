import Joi from 'joi';

export const loginPOST = Joi.object()
  .keys({
    login: Joi.string().required().alphanum(),
    password: Joi.string().required(),
  })
  .with('login', 'password');

export const refreshPOST = Joi.object().keys({
  refreshToken: Joi.string().required(),
});

export const registerPOST = Joi.object()
  .keys({
    name: Joi.string().required().alphanum(),
    login: Joi.string().required(),
    password: Joi.string().required(),
  })
  .with('login', ['password', 'login']);