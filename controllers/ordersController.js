const mongoose = require("mongoose");
const db = require("../models");

// Defining methods for the OrdersController
module.exports = {
  createOrder: function (req, res) {
    let prodIds = [];
    let prodNames = [];
    let prodQtys = [];
    let userId;
    let prodArr = [];
    const productData = [];
    for (var key in req.body.data) {
      productData.push({
        productQuantity: req.body.data[key].productQuantity,
        product: req.body.data[key].id
      })
      var val = req.body.data[key];
      prodIds.push(val.id);
      prodNames.push(val.name);
      prodQtys.push(parseInt(val.quantity));
      userId = val.userId;
      prodArr.push(
        {
          "productQuantity": prodQtys[key],
          "product": prodIds[key]
        }
      );
    }
    db.Order.create({ "ordered": true })
      .then(function (newOrder) {
        orderId = newOrder._id;
        db.Order.updateOne(
          {
            "_id": newOrder._id
          },
          {
            $push: {
              user: userId,
              products: prodArr
            },//define user
          },
        )//return
          .then(function (dataUpdate) {
            res.json(newOrder._id);
          })
      });//orderCreate thenable
  },//createOrder function

  populateOrder: function (req, res) {
    let orderId = req.params.id;
    db.Order.find({ "_id": orderId })
      // Specify that we want to populate the retrieved orders with any associated users and products
      .populate("user")
      .populate("products.product")
      .then(function (data) {
        if (data.length > 0) {
          res.json(data);
        }
        else {
          console.log("No Orders Found");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};
