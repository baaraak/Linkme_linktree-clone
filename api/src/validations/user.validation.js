const Joi = require("joi");

module.exports = {
  // POST /users
  createUser: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(128).required(),
      name: Joi.string().max(128),
    },
  },

  // PATCH /users/:userId
  updateUser: {
    body: {
      email: Joi.string().email(),
      fullName: Joi.string().min(4),
      password: Joi.string().min(6).max(128),
      name: Joi.string().max(128),
      avatar: Joi.string().max(128).allow(""),
      bio: Joi.string().max(128).allow(""),
      title: Joi.string().max(128).allow(""),
    },
  },
};
