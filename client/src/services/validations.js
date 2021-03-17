import Joi from 'joi';

/**
 * Auth Schemas
 */
export const signinSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required().min(6).max(24),
});

export const signupSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required().min(6).max(24),
  fullName: Joi.string().min(4).max(30).trim().required(),
  username: Joi.string().min(3).max(20).alphanum().trim().required(),
});

/**
 * User Schemas
 */
export const profileSchema = Joi.object({
  fullName: Joi.string().required().min(4).max(24),
  email: Joi.string().email({ tlds: { allow: false } }),
});
