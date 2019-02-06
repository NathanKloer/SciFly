const db = require("../models");

// Defining methods for the productsController
module.exports = {
  updateQuantity: function (req, res) {
    let products = req.body;
    for (var key in products) {
      var val = products[key];
      db.Product
        .findOneAndUpdate({ _id: val._id }, { $set: { stockQuantity: val.newStockQuantity } }, { new: true })
        .then()
        .catch(err => res.status(422).json(err));
    }
    res.status(200).json("Quantity Updated");
  }
};
