const express = require("express");
const validate = require("express-validation");
const controller = require("../controllers/link.controller");
const { authorize } = require("../middlewares/auth");

const router = express.Router();

router
  .route("/")
  /**
   * @api {post} link/ Create new link
   */
  .post(authorize(), controller.create);

module.exports = router;
