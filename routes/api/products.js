const router = require("express").Router();
const productsController = require("../../controllers/productsController");

/*******************************************/
// SETUP: The first path will look for urls starting
// with products  "/products". This sets up "/products"
// as the root directory, it is referenced as "/" in
// this file only.  Anything with "/products is sent
// here from the client/src/utils/API.js.
// DESCRIPTION: Search Inventory By Organization:
// ROUTE: /api/products/:organization
/********************************************/
router.route('/:organization')
.get(productsController.findInventoryByOrganization);

router.route('/:id')
.get(productsController.findInventoryItem);
/********************************************
 DESCRIPTION: Search by Inventory By Category and Organization:
 ROUTE: /api/products/:category/:organization
 ********************************************/
router.route('/:category/:organization')
.get(productsController.findByCategoryAndOrganization);

module.exports = router;


