const router = require("express").Router();
// const ordersController = require("../../controllers/ordersController");
// const productsController = require("../../controllers/productsController");
const stockController = require("../../controllers/stockController");


/*
ROUTE1: /api/stock
Description: Deducts the quantity for all products ordered from the products table.
Setup: The first path will look for urls starting with stock  "/stock". This sets up "/stock" as the root directory, it is referenced as "/" in this file only.  Anything with "/stock is sent here from the client/src/utils/API.js.
*/
//CHANGE-7
/************************************************/
router.route('/')
.put(stockController.updateQuantity);
/************************************************/
// router
//   .get("/products",productsController.findByOrganization);
// router.route('/:id')
// .get(ordersController.populateOrder);

module.exports = router;
