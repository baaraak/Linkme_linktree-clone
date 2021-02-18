const express = require("express");
const { authorize } = require("passport");
const controller = require("../controllers/sudoku.controller");
const {
  listUsers,
  createUser,
  replaceUser,
  updateUser,
} = require("../validations/user.validation");

const router = express.Router();

// Load user when API with userId route parameter is hit
router.param("userId", controller.load);

router
  .route("/:userId")
  /**
   * @api {get} /gameState/:userId Get
   */
  .get(controller.get);

module.exports = router;
