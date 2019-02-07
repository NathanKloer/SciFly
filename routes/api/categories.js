const router = require("express").Router();
// const ordersController = require("../../controllers/ordersController");
const categoriesController = require("../../controllers/categoriesController");


/**************************************************
ROUTE: /api/categories/:organization
Description: Find all Category Values for a particular organization:
Setup: The first path will look for urls starting with products  "products/:category".
Example: '/categories/Culturing'
**************************************************/
router.route('/:organization')
.get(categoriesController.findCategoryValues);
module.exports = router;
