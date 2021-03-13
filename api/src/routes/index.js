const express = require("express");
const userRoutes = require("./user.route");
const authRoutes = require("./auth.route");
const siteRoutes = require("./site.route");
const linkRoutes = require("./link.route");

const router = express.Router();

/**
 * GET api/status
 */
router.get("/status", (req, res) => res.send("OK"));

router.use("/user", userRoutes);
router.use("/auth", authRoutes);
router.use("/site", siteRoutes);
router.use("/link", linkRoutes);

module.exports = router;
