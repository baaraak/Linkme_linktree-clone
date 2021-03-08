const express = require("express");
const validate = require("express-validation");
const controller = require("../controllers/link.controller");
const { authorize } = require("../middlewares/auth");
const { order, _delete } = require("../validations/link.validation");

const router = express.Router();

router
  .route("/")
  /**
   * @api {post} link/ Create new link
   */
  .post(authorize(), controller.create);

router.route("/:id").delete(authorize(), validate(_delete), controller.delete);

router.route("/order").patch(authorize(), validate(order), controller.reOrder);

module.exports = router;
