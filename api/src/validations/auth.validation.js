const Joi = require("joi");

module.exports = {
  // POST /auth/register
  register: {
    body: {
      email: Joi.string().email().required(),
      fullName: Joi.string().min(4).max(30).trim().required(),
      username: Joi.string().min(3).max(30).alphanum().trim().required(),
      password: Joi.string().required().min(6).max(128),
    },
  },

  // POST /auth/login
  login: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().required().max(128),
    },
  },

  // POST /auth/facebook
  // POST /auth/google
  oAuth: {
    body: {
      tokenId: Joi.string().required(),
    },
  },

  // POST /auth/send-password-reset
  sendPasswordReset: {
    body: {
      email: Joi.string().email().required(),
    },
  },

  // POST /auth/password-reset
  passwordReset: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().required().min(6).max(128),
      resetToken: Joi.string().required(),
    },
  },
};
