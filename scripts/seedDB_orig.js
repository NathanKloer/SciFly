//TO RUN: go to the scripts directory and run
//node seedDB.js

const mongoose = require("mongoose");
const db = require("../models");
const prototype = (process.env.MONGODB_URI ||"mongodb://localhost/scifly");

//CONNECTION STRING:
/*******************/
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/scifly", {useNewUrlParser: true},
  handleConnect
);


//Product Data:
/*****************/
let productIdArr = [];
const productSeed = [
  {
    productName: "petri dishes",
    description: "100 x 15 mm Round, Beveled ridge, polystyrene",
    stockQuantity: 1000,
    uom: "Unit",
    category: "Dishes, Plates, and Flasks",
    organization: "Georgia BioEd",
    date: new Date(Date.now())
  },
  {
    productName: "conical tubes",
    description: "Falcon 50 mL conical centrifuge tubes",
    stockQuantity: 50,
    uom: "Bag",
    category: "Centrifuge Tubes",
    organization: "Georgia BioEd",
    date: new Date(Date.now())
  },
  {
    productName: "microcentrifuge tubes (0.2 mL, 1.5 mL)",
    description: "1.5mL flat top snap cap microcentrifuge tubes",
    stockQuantity: 500,
    uom: "Unit",
    category: "Microcentrifuge Tubes",
    organization: "Georgia BioEd",
    date: new Date(Date.now())
  },
  {
    productName: "sterile serological pipettes",
    description: "Paper-and-Plastic Wrapped, Polystyrene Serological Pipettes",
    stockQuantity: 200,
    uom: "Unit",
    category: "Pipet",
    organization: "Georgia BioEd",
    date: new Date(Date.now())
  }
];

//User Data
/*******************/
let userIdArr = [];
const userSeed = [
  {
    userName: "Tony Lockhart",
    email: "Tony.Lockhart@ymail.com",
    password: "9834u-q24j0i",
    phone: "662-5555",
    date: new Date(Date.now())
  },
  {
    userName: "Juel Lockhart",
    email: "Juel.lockhart@ymail.com",
    password: "908q34u-[poi240",
    phone: "663-7777",
    date: new Date(Date.now())
  }
];

//STEP 1: LOAD PRODUCT DATA:
/***************************/
function handleConnect(){
  let db = mongoose.connection;
  /// mongoose.connection.prototype.dropCollection(products);
  db.dropCollection("orders", function(){
    db.dropCollection("users", function(){
      db.dropCollection("products", function(){
        main();
      });
    });
  });
}


function main(){

  // db.Product.remove({});
  try{
    db.Product.insertMany(productSeed, function(error, products){
      console.log("PRODUCTLENGTH= "+products.length);
      for(var i = 0; i < products.length; i++)
      {
        productIdArr[i] = products[i]._id;
        console.log("ProductID-" + i + " " + productIdArr[i]);
      }
      if(i >= products.length-1){
        createUser();
      }
    });
  }
  catch(e){
    console.log("error = "+e);
    process.exit(1);
  }

  //STEP 2: LOAD USER DATA:
  /***************************/
  // mongoose.connection.prototype.dropCollection(products);
  // db.User.remove({});
  createUser = () => {
    try{
      db.User.insertMany(userSeed, function(error, users){
        console.log("USERLENGTH= "+users.length);
        for(var i = 0; i < users.length; i++)
        {
          userIdArr[i] = users[i]._id;
          console.log("USERID-" + i + " " + userIdArr[i]);
        }
        if(i >= users.length-1){
          createOrder();
        }
      });
    }
    catch(e){
      console.log("error = "+e);
      process.exit(1);
    }
  }

  let orderId;

  //STEP 3: LOAD PRODUCT DATA:
  /***************************/
  createOrder = () => {
    // db.Order.create({"ordered": true}, function(err, newOrder){
    //   console.log("NEW ORDER ID = "+newOrder._id);
    // })
    db.Order.create({"ordered": true})
    .then(function(newOrder){
      orderId = newOrder._id;
      console.log("NEW ORDER ID = "+newOrder._id)
      console.log("IN THENABALE");

      //IMPORTANT: CREATE AN ARRAY OF YOUR OBJECT IDS
      var objIds = [productIdArr[0], productIdArr[1], productIdArr[2], productIdArr[3]];

      // return db.Order.findOneAndUpdate(
      return db.Order.update(
        {
          "_id": newOrder._id
        },
        {
          $push:
          {
            users:  userIdArr[0],
            products: {$each: objIds},

          },//define user
        },
        populateOrder
      );//return
    });//thenable
  }//function

  //Step4: Populate the data
  populateOrder = () => {
    db.Order.find({"_id": orderId})
          // Specify that we want to populate the retrieved orders with any associated users and products
          .populate("users")
          .populate("products")
          .then(function(data){
              //console.log("htmlRoutes.js -/saved: "+data.length);
              if(data.length > 0){
                  //send the data back to the front end that called the get
                  //res.json(data);
                  // console.log("Populated DATA = ", JSON.stringify(data));
              }
              else{
                  console.log("No Notes Found");
              }
          })
          .catch(function(error){
            console.log(error);
          });
  }
}
