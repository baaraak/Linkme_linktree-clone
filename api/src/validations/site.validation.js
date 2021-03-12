const Joi = require("joi");

module.exports = {
  // PATCH /site
  update: {
    body: {
      background: Joi.string().max(128),
      theme: Joi.string().max(128),
      buttons: Joi.string().max(128),
      fonts: Joi.string().max(128),
    },
  },
};
