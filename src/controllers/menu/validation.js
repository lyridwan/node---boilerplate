import Joi from 'joi';

export default {
  index: {
    params: {},
  },
  store: {
    body: Joi.object().keys({
      id: Joi.number(),
      code: Joi.string().required(),
      name: Joi.string().required(),
    }),
  },
  show: {
    params: {
      id: Joi.number().required(),
    },
  },
  update: {
    params: {
      id: Joi.number().required(),
    },
    body: Joi.object().keys({
      name: Joi.string().required(),
    }),
  },
  destroy: {
    params: {
      id: Joi.number().required(),
    },
  },
};
