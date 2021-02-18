const httpStatus = require("http-status");
const passport = require("passport");
const User = require("../models/user.model");
const APIError = require("../utils/APIError");

const handleJWT = (req, res, next) => async (err, user, info) => {
  const error = err || info;
  const logIn = Promise.promisify(req.logIn); // logIn function by Passport.js
  const apiError = new APIError({
    message: error ? error.message : "Unauthorized",
    status: httpStatus.UNAUTHORIZED,
    stack: error ? error.stack : undefined,
  });

  try {
    if (error || !user) throw error;
    await logIn(user, { session: false });
  } catch (e) {
    return next(apiError);
  }

  req.user = user;

  return next();
};

exports.authorize = () => (req, res, next) =>
  passport.authenticate("jwt", { session: false }, handleJWT(req, res, next))(
    req,
    res,
    next
  );

exports.oAuth = (service) => passport.authenticate(service, { session: false });
