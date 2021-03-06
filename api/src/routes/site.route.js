const express = require("express");
const controller = require("../controllers/site.controller");
const { authorize } = require("../middlewares/auth");

const router = express.Router();

// Load site when API with siteId route parameter is hit
router.param("siteId", controller.load);

router
  .route("/:siteId")
  /**
   * @api {get} site/:id Get site data
   */
  .get(controller.get);

module.exports = router;
