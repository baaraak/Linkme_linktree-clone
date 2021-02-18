const JwtStrategy = require("passport-jwt").Strategy;
const BearerStrategy = require("passport-http-bearer");
const { ExtractJwt } = require("passport-jwt");
const { jwtSecret } = require("./constants");
const authProviders = require("../services/authProviders");
const User = require("../models/user.model");

const jwtOptions = {
  secretOrKey: jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("Bearer"),
};

const jwt = async (payload, done) => {
  try {
    const user = await User.findById(payload.id);
    if (user) return done(null, user);
    return done(null, false);
  } catch (error) {
    return done(error, false);
  }
};

const oAuth = (service) => async (token, done) => {
  try {
    const userData = await authProviders[service](token);
    const user = await User.oAuthLogin(userData);
    return done(null, user);
  } catch (err) {
    return done(err);
  }
};

exports.jwt = new JwtStrategy(jwtOptions, jwt);
exports.google = new BearerStrategy(oAuth("google"));
