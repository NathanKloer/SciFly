const router = require("express").Router();
const userRoutes = require("./users");
const loginRoutes = require("./login");

// routes
router.use("/users", userRoutes);
router.use("/login", loginRoutes);

module.exports = router;
