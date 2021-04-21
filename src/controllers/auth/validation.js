import { Joi } from 'express-validation';

export default {
  login: {
    body: Joi.object().keys({
      username: Joi.string().required(),
      password: Joi.string().required(),
      imei: Joi.string().optional(),
    }),
  },
  logout: {
    body: Joi.object().keys({
      imei: Joi.string().optional(),
    }),
  },
  refresh: {
    body: Joi.object().keys({
      token: Joi.string().required(),
    }),
  },
};
