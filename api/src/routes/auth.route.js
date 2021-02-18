const express = require("express");
const validate = require("express-validation");
const controller = require("../controllers/auth.controller");
const oAuthLogin = require("../middlewares/auth").oAuth;
const {
  login,
  register,
  oAuth,
  sendPasswordReset,
  passwordReset,
} = require("../validations/auth.validation");
const { authorize } = require("../middlewares/auth");

const router = express.Router();

/**
 * {post} auth/register Register a new user
 */
router.route("/register").post(validate(register), controller.register);

/**
 * {get} auth/me Register a new user
 */
router.route("/me").get(authorize(), controller.me);

/**
 * {post} auth/login Login
 */
router.route("/login").post(validate(login), controller.login);

router
  .route("/send-password-reset")
  .post(validate(sendPasswordReset), controller.sendPasswordReset);

router
  .route("/reset-password")
  .post(validate(passwordReset), controller.resetPassword);

/**
 * {post} auth/google Google Login with google. Creates a new user if it does not exist
 */
router
  .route("/google")
  .post(validate(oAuth), oAuthLogin("google"), controller.oAuth);

/**
 * {post} auth/facebook Login with facebook. Creates a new user if it does not exist

router
    .route('/facebook')
    .post(validate(oAuth), oAuthLogin('facebook'), controller.oAuth);
 */

module.exports = router;
