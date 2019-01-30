//Change-6:
/************************************************/
const router = require("express").Router();
const productRoutes = require("./products");//products.js
const userRoutes = require("./users");
const loginRoutes = require("./login");

/************************************
 * RouteHandler 2: Product routes
 * Purpose: Handles "/api/products" URLS
 * Description: First Parameter is a filter: '/api/ requests followed by "/products" will
 * be handled by the second argument "productRoutes".
 ************************************/
router.use("/products", productRoutes);
router.use("/users", userRoutes);
router.use("/login", loginRoutes);

module.exports = router;
/************************************************/
