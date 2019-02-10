//Change-6:
/************************************************/
const router = require("express").Router();
const productRoutes = require("./products");//products.js
const itemRoutes = require("./items");//products.js
const userRoutes = require("./users");
const loginRoutes = require("./login");
const orderRoutes = require("./orders");//orders.js
const stockRoutes = require("./stock");
const organizationRoutes = require("./organizations");
const categoryRoutes = require("./categories");

/************************************
 * RouteHandler 2: Product routes
 * Purpose: Handles "/api/products" URLS
 * Description: First Parameter is a filter: '/api/ requests followed by "/products" will
 * be handled by the second argument "productRoutes".
 ************************************/
router.use("/products", productRoutes);
router.use("/items", itemRoutes);
router.use("/users", userRoutes);
router.use("/login", loginRoutes);
router.use("/order", orderRoutes);
router.use("/stock", stockRoutes);
router.use("/organizations", organizationRoutes);
router.use("/categories", categoryRoutes);

module.exports = router;
/************************************************/
