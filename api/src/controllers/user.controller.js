const httpStatus = require("http-status");
const Link = require("../models/link.model");
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
exports.update = async (req, res, next) => {
  const user = Object.assign(req.user, req.body);

  const savedUser = await user.save();
  return res.json({ user: savedUser.transform() });
};

/**
 * Delete user
 */
exports.remove = async (req, res, next) => {
  try {
    // remove site
    await Site.remove({ user: req.user._id });
    // remove links
    await Link.remove({ user: req.user.id });
    // remove the user
    await req.user.remove();
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
};

/**
 * Get site by username
 */
exports.site = async (req, res, next) => {
  const { username } = req.params;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(httpStatus.NOT_FOUND).json({ success: false });
    const site = await Site.findById(user.site)
      .populate("links")
      .populate("user", "-password");
    return res.json({ site });
  } catch (error) {
    return next(error);
  }
};
