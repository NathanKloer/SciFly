//TO RUN: go to the scripts directory and run
//node seedDB.js

const mongoose = require("mongoose");
const db = require("../models");
const prototype = (process.env.MONGODB_URI ||"mongodb://localhost/scifly");

//CONNECTION STRING:
/*******************/
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/scifly", {useNewUrlParser: true},
  handleConnect
);

//Product Data:
/*****************/
let productIdArr = [];
db.products.insertMany([
  {
    "productName": "Petri Dishes",
    "description": "100 x 15 mm Round",
    "stockQuantity": 1000,
    "uom": "Unit",
    "category": "Culturing",
    "organization": "Georgia BioEd",
    "date": new Date(Date.now())
   },
   {
    "productName": "Microcentrifuge Tubes",
    "description": "1.5mL",
    "stockQuantity": 500,
    "uom": "Unit",
    "category": "Storage",
    "organization": "Georgia BioEd",
    "date": new Date(Date.now())
  ])
const productSeed = [
  {
    "productName": "Petri Dishes",
    "description": "100 x 15 mm Round",
    "stockQuantity": 1000,
    "uom": "Unit",
    "category": "Culturing",
    "organization": "Georgia BioEd",
    "date": new Date(Date.now())
   },
   {
    "productName": "Microcentrifuge Tubes",
    "description": "1.5mL",
    "stockQuantity": 500,
    "uom": "Unit",
    "category": "Storage",
    "organization": "Georgia BioEd",
    "date": new Date(Date.now())
   },
  {
    "productName": "Sterile Serological Pipettes",
    "description": "10 uL",
    "stockQuantity": 200,
    "uom": "Unit",
    "category": "Pipettes",
    "organization": "Georgia BioEd",
    "date": new Date(Date.now())
  }
  {
    "productName": "Culture Flasks",
    "description": "175 mL",
    "stockQuantity": 50,
    "uom": "Box",
    "category": "Culturing",
    "organization": "Georgia BioEd",
    "date": new Date(Date.now())
  },
  {
    "productName": "Aerosol Resistant Tips",
    "description": "50 mL",
    "stockQuantity": 50,
    "uom": "Box",
    "category": "Pipettes",
    "organization": "Georgia BioEd",
    "date": new Date(Date.now())
  },
  {
    "productName": "Pasteur Pipettes",
    "description": "50 mL",
    "stockQuantity": 500,
    "uom": "Box",
    "category": "Pipettes",
    "organization": "Georgia BioEd",
    "date": new Date(Date.now())
  },
  {
    "productName": "Racked Tip Refills",
    "description": "10 uL",
    "stockQuantity": 550,
    "uom": "Box",
    "category": "Pipettes",
    "organization": "Georgia BioEd",
    "date": new Date(Date.now())
  },
  {
    "productName": "Volumetric Pipets",
    "description": "10 mL",
    "stockQuantity": 250,
    "uom": "Box",
    "category": "Pipettes",
    "organization": "Georgia BioEd",
    "date": new Date(Date.now())
  },
  {
    "productName": "Acrylic Water Bottles",
    "description": "20 oz",
    "stockQuantity": 150,
    "uom": "Box",
    "category": "Storage",
    "organization": "Georgia BioEd",
    "date": new Date(Date.now())
  },
  {
    "productName": "Centrifuge Tubes",
    "description": "1 mL",
    "stockQuantity": 150,
    "uom": "Bag",
    "category": "Storage",
    "organization": "Georgia BioEd",
    "date": new Date(Date.now())
  },
  {
    "productName": "Falcon Tubes",
    "description": "50 mL",
    "stockQuantity": 1000,
    "uom": "Tray",
    "category": "Storage",
    "organization": "Georgia BioEd",
    "date": new Date(Date.now())
  },
  {
    "productName": "Flat Bottom Vials",
    "description": "20 mL",
    "stockQuantity": 1500,
    "uom": "Box",
    "category": "Storage",
    "organization": "Georgia BioEd",
    "date": new Date(Date.now())
  },
  {
    "productName": "Luer Lock Syringes",
    "description": "20 mL",
    "stockQuantity": 700,
    "uom": "Box",
    "category": "Syringes",
    "organization": "Georgia BioEd",
    "date": new Date(Date.now())
  },
  {
    "productName": "Pd Syringe Tips",
    "description": "50 mL",
    "stockQuantity": 200,
    "uom": "Box",
    "category": "Syringes",
    "organization": "Georgia BioEd",
    "date": new Date(Date.now())
  },
  {
    "productName": "Syringes",
    "description": "1 mL",
    "stockQuantity": 400,
    "uom": "Box",
    "category": "Syringes",
    "organization": "Georgia BioEd",
    "date": new Date(Date.now())
  },
  {
    "productName": "Glass Amber Bottles",
    "description": "30cc",
    "stockQuantity": 300,
    "uom": "Box",
    "category": "Storage",
    "organization": "Georgia BioEd",
    "date": new Date(Date.now())
  },
  {
    "productName": "Glass Baking Tray",
    "description": "10 oz",
    "stockQuantity": 100,
    "uom": "Storage",
    "category": "",
    "organization": "Georgia BioEd",
    "date": new Date(Date.now())
    },
  {
    "productName": "Glass Clear Jars",
    "description": "2000 mL",
    "stockQuantity": 250,
    "uom": "Box",
    "category": "Storage",
    "organization": "Georgia BioEd",
    "date": new Date(Date.now())
  },
  {
    "productName": "Beverage Micro Filter Funnel",
    "description": "1 mm",
    "stockQuantity": 6000,
    "uom": "Box",
    "category": "Filters",
    "organization": "Georgia BioEd",
    "date": new Date(Date.now())
  },
  {
    "productName": "Bottle Top Filter Funnel",
    "description": "0.1 mm",
    "stockQuantity": 3000,
    "uom": "Box",
    "category": "Filters",
    "organization": "Georgia BioEd",
    "date": new Date(Date.now())
  },
  {
    "productName": "Circle Filter Paper 150mm",
    "description": "150 mm",
    "stockQuantity": 1000,
    "uom": "Box",
    "category": "Filters",
    "organization": "Georgia BioEd",
    "date": new Date(Date.now())
  },
  {
    "productName": "Circle Filter Paper 90mm",
    "description": "90 mm",
    "stockQuantity": 500,
    "uom": "Box",
    "category": "Filters",
    "organization": "Georgia BioEd",
    "date": new Date(Date.now())
  },
  {
    "productName": "Glass fiber filter",
    "description": "150 mm",
    "stockQuantity": 3000,
    "uom": "Box",
    "category": "Filters",
    "organization": "Georgia BioEd",
    "date": new Date(Date.now())
  },
  {
    "productName": "Magnetic Filter Funnel",
    "description": "150 mm",
    "stockQuantity": 1000,
    "uom": "Box",
    "category": "Filters",
    "organization": "Georgia BioEd",
    "date": new Date(Date.now())
  },
  {
    "productName": "Membrane Filter",
    "description": "66 mm",
    "stockQuantity": 1350,
    "uom": "Box",
    "category": "Filters",
    "organization": "Georgia BioEd",
    "date": new Date(Date.now())
  },
  {
    "productName": "ZapCap Bottle-top Filters",
    "description": "9mm",
    "stockQuantity": 1800,
    "uom": "Box",
    "category": "Filters",
    "organization": "Georgia BioEd",
    "date": new Date(Date.now())
  },
  {
    "productName": "Peerless Transaxle",
    "description": "10 lb",
    "stockQuantity": 100,
    "uom": "Unit",
    "category": "Axles",
    "organization": "Specialty Charity",
    "date": new Date(Date.now())
  },
  {
    "productName": "Lossless Pro Axle",
    "description": "7 lb",
    "stockQuantity": 150,
    "uom": "Unit",
    "category": "Axles",
    "organization": "Specialty Charity",
    "date": new Date(Date.now())
  },
  {
    "productName": "Guidance Wheels",
    "description": "1.5 lb",
    "stockQuantity": 180,
    "uom": "Unit",
    "category": "Axles",
    "organization": "Specialty Charity",
    "date": new Date(Date.now())
  },
  {
    "productName": "Pillow Block Bearings",
    "description": "1 lb",
    "stockQuantity": 1000,
    "uom": "Box",
    "category": "Spares",
    "organization": "Specialty Charity",
    "date": new Date(Date.now())
  },
  {
    "productName": "Flange Bearings",
    "description": "0.5 lb",
    "stockQuantity": 1095,
    "uom": "Box",
    "category": "Spares",
    "organization": "Specialty Charity",
    "date": new Date(Date.now())
  },
  {
    "productName": "Fuel Shut-off V-Belt",
    "description": "10x10m",
    "stockQuantity": 1000,
    "uom": "Unit",
    "category": "Spares",
    "organization": "Specialty Charity",
    "date": new Date(Date.now())
  },
  {
    "productName": "Spark Plug Wire Set",
    "description": "2 pcs",
    "stockQuantity": 1000,
    "uom": "Kit",
    "category": "Spares",
    "organization": "Specialty Charity",
    "date": new Date(Date.now())
  },
  {
    "productName": "Condensed Capacitor",
    "description": "30 oz",
    "stockQuantity": 1800,
    "uom": "Box",
    "category": "Spares",
    "organization": "Specialty Charity",
    "date": new Date(Date.now())
  },
  {
    "productName": "Tie Rod Ends",
    "description": "10 m",
    "stockQuantity": 1000,
    "uom": "Unit",
    "category": "Spares",
    "organization": "Specialty Charity",
    "date": new Date(Date.now())
  },
  {
    "productName": "Solenoid",
    "description": "10 oz",
    "stockQuantity": 2000,
    "uom": "Unit",
    "category": "Tractor Supply",
    "organization": "Specialty Charity",
    "date": new Date(Date.now())
  },
  {
    "productName": "Throttle Control",
    "description": "8.99 oz",
    "stockQuantity": 1500,
    "uom": "Unit",
    "category": "Tractor Supply",
    "organization": "Specialty Charity",
    "date": new Date(Date.now())
  },
  {
    "productName": "Turnbuckles",
    "description": "0.99 oz",
    "stockQuantity": 600,
    "uom": "Unit",
    "category": "Tractor Supply",
    "organization": "Specialty Charity",
    "date": new Date(Date.now())
  },
  {
    "productName": "Excel Alternator",
    "description": "100 lb",
    "stockQuantity": 12350,
    "uom": "Box",
    "category": "Tractor Supply",
    "organization": "Specialty Charity",
    "date": new Date(Date.now())
  }
];

//User Data
/*******************/
// let userIdArr = [];
// const userSeed = [
//   {
//     userName: "tlockhart",
//     email: "Tony.Lockhart@ymail.com",
//     password: "9834u-q24j0i",
//     firstName: "Tony",
//     lastName: "Lockhart",
//     school: "GT",
//     district: "ATL",
//     course: "Biology",
//     date: new Date(Date.now())
//   },
//   {
//     userName: "Juel Lockhart",
//     email: "Juel.lockhart@ymail.com",
//     password: "908q34u-[poi240",
//     firstName: "Juel",
//     lastName: "Lockhart",
//     school: "GT",
//     district: "ATL",
//     course: "AP Biology",
//     date: new Date(Date.now())
//   }
// ];

//STEP 1: LOAD PRODUCT DATA:
/***************************/
function handleConnect(){
  let db = mongoose.connection;
  /// mongoose.connection.prototype.dropCollection(products);

      db.dropCollection("products", function(){
        main();
      });

}


function main(){

  db.Product.remove({});
  try{
    db.Product.insertMany(productSeed, function(products){

      for(var i = 0; i < products.length; i++)
      {
        productIdArr[i] = products[i]._id;
        console.log("ProductID-" + i + " " + productIdArr[i]);
      }

    });
  }
  catch(e){
    console.log("error = "+e);
    process.exit(1);
  }
};

//   //STEP 2: LOAD USER DATA:
//   /***************************/
//   // mongoose.connection.prototype.dropCollection(products);
//   // db.User.remove({});
//   createUser = () => {
//     try{
//       db.User.insertMany(userSeed, function(error, users){
//         console.log("USERLENGTH= " + users);
//         for(var i = 0; i < users.length; i++)
//         {
//           userIdArr[i] = users[i]._id;
//           console.log("USERID-" + i + " " + userIdArr[i]);
//           if(i === users.length-1){
//             createOrder();
//           }
//         }

//       });
//     }
//     catch(e){
//       console.log("error = "+e);
//       process.exit(1);
//     }
//   }

//   let orderId;

//   //STEP 3: LOAD PRODUCT DATA:
//   /***************************/
//   createOrder = () => {
//     // db.Order.create({"ordered": true}, function(err, newOrder){
//     //   console.log("NEW ORDER ID = "+newOrder._id);
//     // })
//     db.Order.create({"ordered": true})
//     .then(function(newOrder){
//       orderId = newOrder._id;
//       console.log("NEW ORDER ID = "+newOrder._id)
//       console.log("IN THENABALE");

//       //IMPORTANT: CREATE AN ARRAY OF YOUR OBJECT IDS
//       // var objIds = [productIdArr[0], productIdArr[1], productIdArr[2], productIdArr[3]];

//       // return db.Order.findOneAndUpdate(
//       // return db.Order.update(
//         db.Order.update(
//         {
//           "_id": newOrder._id
//         },
//         {
//           $push: {
//             user:  userIdArr[0],
//             products: [
//               {
//                 productQuantity: 1,
//                 product: productIdArr[0]._id
//               }
//             ]
//             // ,products: [1, productIdArr[1]],
//             // products: [1, productIdArr[2]],
//             // products: [1, productIdArr[3]]
//           },//define user
//         },
//         populateOrder
//       );//update query
//       return newOrder._id;
//       // populateOrder();
//     });//thenable
//   }//function

//   //Step4: Populate the data
//   populateOrder = () => {
//     db.Order.find({"_id": orderId})
//           // Specify that we want to populate the retrieved orders with any associated users and products
//           .populate("user")
//           .populate("products.product")
//           .then(function(data){
//               //console.log("htmlRoutes.js -/saved: "+data.length);
//               if(data.length > 0){
//                   //send the data back to the front end that called the get
//                   //res.json(data);
//                   // console.log("DATA =", data);
//                   console.log(JSON.stringify(data));
//                   // console.log("Populated DATA = ", JSON.stringify(data));
//               }
//               else{
//                   console.log("No Notes Found");
//               }
//           })
//           .catch(function(error){
//             console.log(error);
//           });
//   }
// }
