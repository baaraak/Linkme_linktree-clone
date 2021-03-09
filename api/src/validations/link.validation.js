const Joi = require("joi");

module.exports = {
  // DELETE /link/:id
  _delete: {
    params: {
      id: Joi.string().required(),
    },
  },

  // PATCH /link
  update: {
    params: {
      id: Joi.string().required(),
    },
    body: {
      title: Joi.string().allow(""),
      href: Joi.string().allow(""),
    },
  },

  // PATCH /link/order
  order: {
    body: {
      startIndex: Joi.number().min(0).max(128),
      endIndex: Joi.number().min(0).max(128),
    },
  },
};
