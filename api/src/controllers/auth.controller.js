const httpStatus = require("http-status");
const User = require("../models/user.model");
const moment = require("moment-timezone");
const APIError = require("../utils/APIError");
const emailProvider = require("../services/emails/emailProvider");

/**
 * Get current logged user
 */
exports.me = async (req, res, next) => {
  try {
    return res.json({ user: req.user.transform() });
  } catch (error) {
    return next(error);
  }
};

/**
 * Returns token and user if registration was successful
 */
exports.register = async (req, res, next) => {
  try {
    const user = await new User(req.body).save();
    res.status(httpStatus.CREATED);
    return res.json({
      token: user.token(),
      user: user.transform(),
    });
  } catch (error) {
    return next(User.checkDuplicates(error));
  }
};

/**
 * Returns token and user if valid email and password is provided
 */
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).exec();
    if (user && (await user.passwordMatches(password))) {
      return res.json({
        token: user.token(),
        user: user.transform(),
      });
    }
    throw new APIError({
      status: httpStatus.UNAUTHORIZED,
      isPublic: true,
      message: "Incorrect email or password",
    });
  } catch (error) {
    return next(error);
  }
};

/**
 * login with an existing user or creates a new one if valid accessToken token
 * Returns jwt token
 */
exports.oAuth = async (req, res, next) => {
  try {
    const { user } = req;
    return res.json({
      token: user.token(),
      user: user.transform(),
    });
  } catch (error) {
    return next(error);
  }
};

exports.sendPasswordReset = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email }).exec();

    if (user) {
      const passwordResetObj = await Promise.resolve();
      emailProvider.sendPasswordReset(passwordResetObj);
      res.status(httpStatus.OK);
      return res.json("success");
    }
    throw new APIError({
      status: httpStatus.UNAUTHORIZED,
      message: "No account found with that email",
    });
  } catch (error) {
    return next(error);
  }
};

exports.resetPassword = async (req, res, next) => {
  try {
    const { password } = req.body;
    const resetTokenObject = await Promise.resolve();

    const err = {
      status: httpStatus.UNAUTHORIZED,
      isPublic: true,
    };
    if (!resetTokenObject) {
      err.message = "Cannot find matching reset token";
      throw new APIError(err);
    }
    if (moment().isAfter(resetTokenObject.expires)) {
      err.message = "Reset token is expired";
      throw new APIError(err);
    }

    const user = await User.findOne({
      email: resetTokenObject.userEmail,
    }).exec();
    user.password = password;
    await user.save();
    emailProvider.sendPasswordChangeEmail(user);

    res.status(httpStatus.OK);
    return res.json("Password Updated");
  } catch (error) {
    return next(error);
  }
};
