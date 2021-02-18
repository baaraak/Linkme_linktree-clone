const httpStatus = require("http-status");
const { omit } = require("lodash");
const User = require("../models/user.model");

/**
 * Load user and append to req.
 */
exports.load = async (req, res, next, id) => {
  try {
    const user = await User.get(id);
    req.user = user;
    return next();
  } catch (error) {
    return next(error);
  }
};

/**
 * Get current logged in user
 */
exports.get = (req, res) => res.json(req.user.transform());

/**
 * Create new user
 */
exports.create = async (req, res, next) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(httpStatus.CREATED);
    res.json(savedUser.transform());
  } catch (error) {
    next(User.checkDuplicates(error));
  }
};

/**
 * Update existing user
 */
exports.update = (req, res, next) => {
  const user = Object.assign(req.user, req.body);

  user
    .save()
    .then((savedUser) => res.json(savedUser.transform()))
    .catch((e) => next(User.checkDuplicates(e)));
};

/**
 * Delete user
 */
exports.remove = (req, res, next) => {
  const { user } = req.locals;

  user
    .remove()
    .then(() => res.status(httpStatus.NO_CONTENT).end())
    .catch((e) => next(e));
};
