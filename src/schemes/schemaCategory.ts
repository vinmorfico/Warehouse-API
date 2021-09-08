import Joi from 'joi';

export const categoryPOST = Joi.object().keys({
  name: Joi.string().alphanum(),
});

export const categoryPUT = Joi.object().keys({
  name: Joi.string(),
});