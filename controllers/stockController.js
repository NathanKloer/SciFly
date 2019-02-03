const db = require("../models");

// Defining methods for the productsController
module.exports = {
  updateQuantity: function (req, res) {
    let products = req.body;
    for (var key in products){
      var val = products[key];
      // console.log("ID = ", val._id, "newQuantity = "+val.newStockQuantity);
      db.Product
        .findOneAndUpdate({ _id: val._id }, {$set: {stockQuantity: val.newStockQuantity}}, {new: true})
        .then()
        .catch(err => res.status(422).json(err));
    }
    // console.log("stockController: In updateQuantity data = ", JSON.stringify(products));
    res.status(200).json("Quantity Updated");
    }
};
