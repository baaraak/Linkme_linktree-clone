const express = require("express");
const validate = require("express-validation");
const controller = require("../controllers/site.controller");
const { authorize } = require("../middlewares/auth");
const { update } = require("../validations/site.validation");

const router = express.Router();

// Load site when API with siteId route parameter is hit
router.param("siteId", controller.load);

router
  .route("/")
  /**
   * @api {path} /site Update site
   */
  .patch(authorize(), validate(update), controller.update);

router
  .route("/:siteId")
  /**
   * @api {get} /site Get site data
   */
  .get(controller.get);

module.exports = router;
