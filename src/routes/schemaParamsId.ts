import Joi from 'joi';

export const paramID = Joi.object().keys({
  id: Joi.number().min(1).required(),
});
