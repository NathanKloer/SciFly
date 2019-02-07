const router = require("express").Router();
const stockController = require("../../controllers/stockController");


/***********************************************
ROUTE: /api/stock
DESCRIPTION: Deducts the quantity for all products
ordered from the products table.
SETUP: The first path will look for urls starting
with stock  "/stock". This sets up "/stock" as the
root directory, it is referenced as "/" in this file
only.  Anything with "/stock is sent here from the
client/src/utils/API.js.
************************************************/
router.route('/')
.put(stockController.updateQuantity);
/************************************************/

module.exports = router;
