const router = require("express").Router();
// const ordersController = require("../../controllers/ordersController");
const productsController = require("../../controllers/productsController");


/*
ROUTE1: /api/products
Description: Return all data from the products table as a JSON object.
Setup: The first path will look for urls starting with products  "/products". This sets up "/products" as the root directory, it is referenced as "/" in this file only.  Anything with "/products is sent here from the client/src/utils/API.js.
*/
//CHANGE-7
/************************************************/
router.route('/')
.get(productsController.findByOrganization);
/************************************************/
// router
//   .get("/products",productsController.findByOrganization);

//CHANGE-8: Simple TEST:Uncomment
/************************************************/
  // router.get("/products", function(req, res){
  //   res.send('route works')
  // });
  /************************************************/

//CHANGE-9: Category ROUTE:
/************************************************/
/*ROUTE2: /api/products/:Category
Description: Return all data from the products table as a JSON where productName = url paramenter.*/

/************************************************/
// router.get("/products/:Category", productsController.findByCategory)
  /************************************************/
router.route('/:category')
.get(productsController.findByCategory);
module.exports = router;
