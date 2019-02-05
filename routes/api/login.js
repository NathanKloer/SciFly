const router = require("express").Router();
const loginController = require("../../controllers/loginController");

// Matches with "/api/login"
router.route("/")
  .get(loginController.findOne)
  .post(loginController.findOne);

// Matches with "/api/login/:id"
router
  .route("/:id")
  .get(loginController.findOne);

module.exports = router;
