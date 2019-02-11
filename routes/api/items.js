const router = require("express").Router();
const productsController = require("../../controllers/productsController");


router.route('/:id')
.get(productsController.findInventoryItem);

module.exports = router;


