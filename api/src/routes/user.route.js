const express = require("express");
const validate = require("express-validation");
const controller = require("../controllers/user.controller");
const { authorize } = require("../middlewares/auth");
const { updateUser } = require("../validations/user.validation");

const router = express.Router();

router
  .route("/")
  /**
   * @api {patch} /users Update some fields of a user document
   */
  .patch(authorize(), validate(updateUser), controller.update)
  /**
   * @api {patch} users/:id Delete a user
   */
  .delete(authorize(), controller.remove);

router.route("/:username").get(controller.site);

module.exports = router;
