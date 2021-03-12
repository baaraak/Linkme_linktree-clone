const httpStatus = require("http-status");
const { omit } = require("lodash");
const Site = require("../models/site.model");
const User = require("../models/user.model");

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

  user.save().then((savedUser) => res.json({ user: savedUser.transform() }));
};

/**
 * Delete user
 */
exports.remove = (req, res, next) => {
  const { user } = req.locals;

  user
    .remove()
    .then(() => res.status(httpStatus.NOT_FOUND).json())
    .catch((e) => next(e));
};

/**
 * Get site by username
 */
exports.site = async (req, res, next) => {
  const { username } = req.params;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(httpStatus.NOT_FOUND).json({ success: false });
    const site = await Site.findById(user.site).populate("links");
    console.log("***********************");
    console.log(site);
    console.log("***********************");
    res.json({ site });
  } catch (error) {
    next(error);
  }
};
