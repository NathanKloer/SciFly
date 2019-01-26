//TO RUN: go to the scripts directory and run
//node createOrder.js

const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/scifly"
);

/***************
*create order:
****************/
db.Order.create({"ordered": true}, function(err, newOrder){
  console.log("NEW ORDER ID = "+newOrder._id);
  return db.Order.findOneAndUpdate({ "_id": newOrder._id }),
  {
    $push:
    {
      users:  mongoose.Types.ObjectId("5c4c1ca2d503075274824386")
    }
  },
  {
    $push:
    [
      {
        products: mongoose.Types.ObjectId("5c4c1ca2d503075274824382")
      },
      {
        products: mongoose.Types.ObjectId("5c4c1ca2d503075274824383")
      }
    ]
  }
})
.exec(function(err, user){
  console.log("user and products added to the order");
});

