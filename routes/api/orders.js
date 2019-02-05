const router = require("express").Router();
// const ordersController = require("../../controllers/ordersController");
const productsController = require("../../controllers/productsController");
const ordersController = require("../../controllers/ordersController");


/*
ROUTE1: /api/products
Description: Return all data from the products table as a JSON object.
Setup: The first path will look for urls starting with products  "/products". This sets up "/products" as the root directory, it is referenced as "/" in this file only.  Anything with "/products is sent here from the client/src/utils/API.js.
*/
//CHANGE-7
/************************************************/
router.route('/')
.post(ordersController.createOrder);
/************************************************/
// router
//   .get("/products",productsController.findByOrganization);
router.route('/:id')
.get(ordersController.populateOrder);

module.exports = router;
