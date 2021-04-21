import { Joi } from 'express-validation';

export default {
  changePassword: {
    body: Joi.object().keys({
      password: Joi.string().required(),
      password2: Joi.string().valid(Joi.ref('password')).required(),
    }),
  },
  device: {
    store: {
      body: Joi.object().keys({
        imei: Joi.string().optional(),
        fcmToken: Joi.string().optional(),
      }),
    },
  },
};
