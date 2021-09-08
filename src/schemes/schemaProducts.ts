import Joi from 'joi';

export const productsPOST = Joi.object().keys({
  name: Joi.string().required().alphanum(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  amount_left: Joi.number().required(),
  category_id: Joi.number().min(1).required(),
  users_id: Joi.number().min(1).required(),
});

export const productsPUT = Joi.object().keys({
  name: Joi.string().alphanum(),
  description: Joi.string(),
  price: Joi.number(),
  amount_left: Joi.number(),
  category_id: Joi.number().min(1),
  users_id: Joi.number().min(1),
});