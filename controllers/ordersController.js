const db = require("../models");

// Defining methods for the OrdersController
module.exports = {
  createOrder: function(req, res) {
    console.log("Body = ", req.body.data);
    for (var key in req.body.data){
      var val = req.body.data[key];
      console.log("Products = "+JSON.stringify(val.name));
    }
    res.status(200).send("ok");
      // db.Order.create({"ordered": true})
      // .then(function(newOrder){
      //   orderId = newOrder._id;
      //   console.log("NEW ORDER ID = "+newOrder._id)
      //   console.log("IN THENABALE");
      //   //IMPORTANT: CREATE AN ARRAY OF YOUR OBJECT IDS
      //   var productIds = [productIdArr[0], productIdArr[1], productIdArr[2], productIdArr[3]];
      //   // return db.Order.findOneAndUpdate(
      //   return db.Order.update(
      //     {
      //       "_id": newOrder._id
      //     },
      //     {
      //       $push:
      //       {
      //         users:  userIdArr[0],
      //         products: {$each: productIds},
      //       },//define user
      //     },
      //     //01/30/19: POPULATE CALL MAY GO HERE:
      //     //populateOrder
      //   );//return
      // });//thenable
    },//function

  findAll: function(req, res) {
    db.Order
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Order
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Order
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Order
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Order
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
