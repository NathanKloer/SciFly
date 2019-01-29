//Change-5 Commented all:
/************************************************/
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

/************************************
 * RouteHandler 1: API Routes
 * Purpose: Handles "/api" URLS
 * Description: First Parameter is a filter: '/api/ requests
 * will be handled by the second argument "apiRoutes".
 ************************************/
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
/************************************************/
