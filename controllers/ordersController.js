const mongoose = require("mongoose");
const db = require("../models");

// Defining methods for the OrdersController
module.exports = {
  createOrder: function(req, res) {
    let prodIds = [];
    let prodNames = [];
    let prodQtys = [];
    let userId;
    let prodArr = [];

    //console.log("Body = ", req.body.data);
    const productData=[];
    for (var key in req.body.data){
      productData.push({productQuantity: req.body.data[key].productQuantity,
                        product: req.body.data[key].id})
      var val = req.body.data[key];

      prodIds.push(val.id);
      // console.log("Product ID = "+JSON.stringify(prodIds[key]));
      prodNames.push(val.name);
      // console.log("Product Name = "+JSON.stringify(prodNames[key]));
      prodQtys.push(parseInt(val.quantity));
      // console.log("Product Quantity = "+JSON.stringify(prodQtys[key]));
      userId = val.userId;
      // console.log("User ID = "+JSON.stringify(userId));
      prodArr.push(
        {
          "productQuantity": prodQtys[key],
          "product": prodIds[key]
        }
      );

        // console.log("PRODUCTS =", prodArr);

    }
    // res.status(200).send("ok");
      db.Order.create({"ordered": true})
      .then(function(newOrder){
        orderId = newOrder._id;
        // console.log("NEW ORDER ID = "+newOrder._id)
        // console.log("IN THENABALE");
        db.Order.updateOne(
          {
            "_id": newOrder._id
          },
          {
            $push: {
              user:  userId,
              products: prodArr
            },//define user
          },
          //01/30/19: POPULATE CALL MAY GO HERE:
          //populateOrder
        )//return
        .then(function(dataUpdate){
          // console.log("After Insert order id = "+newOrder._id);
            res.json(newOrder._id);
        })
      });//orderCreate thenable
    },//createOrder function

    populateOrder: function(req, res) {
      // console.log("CONTROLER ORDER = "+req);
      let orderId = req.params.id;
      // console.log("In populate orderId = "+orderId);
      // db.Order.find({"_id": mongoose.Types.ObjectId(orderId)})
      // db.Order.find({ _id: mongoose.Types.ObjectId(orderId) })
      db.Order.find({"_id": orderId})
            // Specify that we want to populate the retrieved orders with any associated users and products
            .populate("user")
            //.populate("products.productQuantity")
            .populate("products.product")
            .then(function(data){
                //console.log("htmlRoutes.js -/saved: "+data.length);
                if(data.length > 0){
                    //send the data back to the front end that called the get
                    //res.json(data);
                    // console.log("DATA =", data);
                    // console.log("Data = ", JSON.stringify(data));
                    res.json(data);
                    // console.log("Populated DATA = ", JSON.stringify(data));
                }
                else{
                    console.log("No Orders Found");
                }
                //return populated data
                //data => res.json(data);
            })
            .catch(function(error){
              console.log(error);
            });
    }
  //   ,

  // findAll: function(req, res) {
  //   db.Order
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // findById: function(req, res) {
  //   db.Order
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // create: function(req, res) {
  //   db.Order
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function(req, res) {
  //   db.Order
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Order
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
