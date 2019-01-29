//Change-6:
/************************************************/
const router = require("express").Router();
const productRoutes = require("./products");//products.js

/************************************
 * RouteHandler 2: Product routes
 * Purpose: Handles "/api/products" URLS
 * Description: First Parameter is a filter: '/api/ requests followed by "/products" will
 * be handled by the second argument "productRoutes".
 ************************************/
router.use("/products", productRoutes);

module.exports = router;
/************************************************/
