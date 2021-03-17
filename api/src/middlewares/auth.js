const httpStatus = require("http-status");
const passport = require("passport");
const { OAuth2Client } = require("google-auth-library");
const User = require("../models/user.model");
const APIError = require("../utils/APIError");

const client = new OAuth2Client({
  clientId: process.env.GOOGLE_OAUTH_CLIENT,
  clientSecret: process.env.GOOGLE_OAUTH_SECRET,
});

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
    next,
  );

exports.oAuth = async (req, res, next) => {
  try {
    // verify id token
    const ticket = await client.verifyIdToken({
      idToken: req.body.tokenId,
      audience: process.env.GOOGLE_OAUTH_CLIENT,
    });
    // get user data
    const { sub: id, email, picture, name } = ticket.getPayload();
    console.log({ id });
    const user = await User.oAuthLogin({
      id,
      email,
      picture,
      name,
    });
    req.user = user;
    next();
  } catch (e) {
    next(e);
  }
};
