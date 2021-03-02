const httpStatus = require("http-status");
const { omit } = require("lodash");
const User = require("../models/user.model");

/**
 * Create new site (when new user created)
 */
exports.create = async (req, res, next) => {
  try {
    const { username, ...rest } = req.body;
    const user = new User(rest);
    const savedUser = await user.save();
    res.status(httpStatus.CREATED);
    res.json(savedUser.transform());
  } catch (error) {
    next(User.checkDuplicates(error));
  }
};
