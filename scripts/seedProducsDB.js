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
const productSeed = [
  {
  productName: "culture flasks",
  description: "175 mL",
  stockQuantity: 11,
  uom: "boxes",
  category: "Culturing",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "incubator flask clamp",
  description: "",
  stockQuantity: 22,
  uom: "",
  category: "Culturing",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Glass fiber filter",
  description: "2 cm",
  stockQuantity: 4,
  uom: "boxes",
  category: "Filters",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "magnetic filter funnel",
  description: "",
  stockQuantity: 1,
  uom: "box",
  category: "Filters",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "membrane filter",
  description: "66 mm",
  stockQuantity: 1,
  uom: "boxes",
  category: "Filters",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Microfunnel Filter Funnel",
  description: "",
  stockQuantity: 6,
  uom: "boxes",
  category: "Filters",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "ZapCap bottle-top filters",
  description: "",
  stockQuantity: 1,
  uom: "",
  category: "Filters",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "culture flasks",
  description: "275 mL",
  stockQuantity: 1,
  uom: "box",
  category: "Culturing",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "spin dryer",
  description: "",
  stockQuantity: 1,
  uom: "",
  category: "Dryer",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "blank computer labels",
  description: "",
  stockQuantity: 30,
  uom: "boxes",
  category: "Miscellaneous",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "clamp",
  description: "70 cm",
  stockQuantity: 1,
  uom: "",
  category: "Miscellaneous",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Dilution Vials",
  description: "",
  stockQuantity: 1,
  uom: "box",
  category: "Miscellaneous",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "fiber glass",
  description: "",
  stockQuantity: 1,
  uom: "box",
  category: "Miscellaneous",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "test tube cleaners",
  description: "",
  stockQuantity: 4,
  uom: "",
  category: "Miscellaneous",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "aerosol resistant tips",
  description: "10 uL",
  stockQuantity: 4,
  uom: "boxes",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "silicone tubing",
  description: "75 feet",
  stockQuantity: "",
  uom: "",
  category: "Miscellaneous",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "aerosol resistant tips",
  description: "1000 uL",
  stockQuantity: 5,
  uom: "boxes",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "aerosol resistant tips",
  description: "300 uL",
  stockQuantity: 6,
  uom: "boxes",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "pasteur pipettes",
  description: "5 3/4\"",
  stockQuantity: 5,
  uom: "boxes",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "pipettes tips",
  description: "1000 uL",
  stockQuantity: 13,
  uom: "racks",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "racked tip refills",
  description: "10 uL",
  stockQuantity: 11,
  uom: "boxes",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "pasteur pipettes",
  description: "9\"",
  stockQuantity: 8,
  uom: "boxes",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "racked tip refills",
  description: "1000 uL",
  stockQuantity: 13,
  uom: "boxes",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "racked tip refills",
  description: "200 uL",
  stockQuantity: 21,
  uom: "boxes",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "racked tips",
  description: "10 uL",
  stockQuantity: 1,
  uom: "racks",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "racked tips",
  description: "1000 uL",
  stockQuantity: 33,
  uom: "racks",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "racked tips",
  description: "10000 uL",
  stockQuantity: 8,
  uom: "racks",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "racked tips",
  description: "2 uL",
  stockQuantity: 10,
  uom: "racks",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "racked tips",
  description: "20 uL",
  stockQuantity: 1,
  uom: "racks",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "racked tips",
  description: "200 uL",
  stockQuantity: 243,
  uom: "racks",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "racked tips",
  description: "5000 uL",
  stockQuantity: 3,
  uom: "racks",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "serological pipettes",
  description: "1 mL",
  stockQuantity: 2,
  uom: "boxes",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "serological pipettes",
  description: "10 mL",
  stockQuantity: 13,
  uom: "boxes",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "test tubes",
  description: "",
  stockQuantity: 13,
  uom: "boxes",
  category: "Culturing",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "culture flasks",
  description: "40 mL",
  stockQuantity: 1,
  uom: "box",
  category: "Culturing",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Glass fiber filter",
  description: "150 mm",
  stockQuantity: 3,
  uom: "boxes",
  category: "Filters",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Circle filter paper",
  description: "150 mm",
  stockQuantity: 1,
  uom: "box",
  category: "Filters",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Circle filter paper",
  description: "90 mm",
  stockQuantity: 5,
  uom: "boxes",
  category: "Filters",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "serological pipettes",
  description: "25 mL",
  stockQuantity: 7,
  uom: "bags",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "gel staining tray",
  description: "",
  stockQuantity: 1,
  uom: "",
  category: "Electrophoresis",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "serological pipettes",
  description: "5 mL",
  stockQuantity: 3,
  uom: "boxes",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "sterile pipettes tips",
  description: "1000 uL",
  stockQuantity: 1,
  uom: "boxes",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "beverage monior/micro filter funnel",
  description: "",
  stockQuantity: 6,
  uom: "boxes",
  category: "Filters",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Bottle top filter funnel",
  description: "125 uL",
  stockQuantity: 3,
  uom: "",
  category: "Filters",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "sterile pipettes tips",
  description: "200 uL",
  stockQuantity: 1,
  uom: "boxes",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "tip refills",
  description: "10 uL",
  stockQuantity: 4,
  uom: "bags",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "tip refills",
  description: "1000 uL",
  stockQuantity: 3,
  uom: "bags",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "tip refills",
  description: "200 uL",
  stockQuantity: 14,
  uom: "bags",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "tip refills",
  description: "10000 uL",
  stockQuantity: 1,
  uom: "box",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "volumetric pipets",
  description: "10 mL",
  stockQuantity: 2,
  uom: "boxes",
  category: "Pipettes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "gloves",
  description: "L",
  stockQuantity: 4,
  uom: "boxes",
  category: "PPE",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "gloves",
  description: "M",
  stockQuantity: 2,
  uom: "boxes",
  category: "PPE",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "gloves",
  description: "S",
  stockQuantity: 2,
  uom: "boxes",
  category: "PPE",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "goggles",
  description: "",
  stockQuantity: 1,
  uom: "box",
  category: "PPE",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "96 well plates",
  description: "",
  stockQuantity: 10,
  uom: "boxes",
  category: "Protein Assays",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Petri Dishes",
  description: "",
  stockQuantity: 30,
  uom: "sleeves",
  category: "Culturing",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "gloves",
  description: "XL",
  stockQuantity: 2,
  uom: "boxes",
  category: "PPE",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "cuvette trays",
  description: "",
  stockQuantity: 4,
  uom: "boxes",
  category: "Protein Assays",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Microplate rotor",
  description: "",
  stockQuantity: 4,
  uom: "",
  category: "Protein Assays",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "acrylic water bottles",
  description: "",
  stockQuantity: 8,
  uom: "boxes",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "centrifuge tubes",
  description: "1 mL",
  stockQuantity: 1,
  uom: "bag",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "centrifuge tubes with filter",
  description: "",
  stockQuantity: 3,
  uom: "bags",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "disposable cups",
  description: "",
  stockQuantity: 1,
  uom: "box",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "falcon tubes",
  description: "50 mL",
  stockQuantity: 7,
  uom: "trays",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "flat bottom vials",
  description: "20 mL",
  stockQuantity: 5,
  uom: "boxes",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "glass amber collection bottles",
  description: "",
  stockQuantity: 3,
  uom: "boxes",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "field sample collection tubes",
  description: "",
  stockQuantity: 2,
  uom: "boxes",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "glass baking tray",
  description: "",
  stockQuantity: 1,
  uom: "",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "ELISA tubes",
  description: "",
  stockQuantity: 1,
  uom: "box",
  category: "Immunoassays",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "bottle racks",
  description: "",
  stockQuantity: 3,
  uom: "boxes",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "glass clear collection jars",
  description: "2000 mL",
  stockQuantity: 2,
  uom: "boxes",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "glass clear collection jars",
  description: "",
  stockQuantity: 10,
  uom: "boxes",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "microcentrifuge tubes",
  description: "0.5 mL",
  stockQuantity: 12,
  uom: "bags",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "plastic clear collection jars",
  description: "1000 mL",
  stockQuantity: 1,
  uom: "box",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "plastic clear collection jars",
  description: "2000 mL",
  stockQuantity: 1,
  uom: "box",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "round bottom vials",
  description: "12 mL",
  stockQuantity: 8,
  uom: "bags",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "cuvettes",
  description: "",
  stockQuantity: 1,
  uom: "box",
  category: "UV-Vis",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Luer lock syringes",
  description: "20 mL",
  stockQuantity: 7,
  uom: "boxes",
  category: "Syringes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Tool Tray",
  description: "",
  stockQuantity: 8,
  uom: "",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "Pd syringe tips",
  description: "50 mL",
  stockQuantity: 2,
  uom: "boxes",
  category: "Syringes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "small plastic collection tubes",
  description: "50 mL",
  stockQuantity: 1,
  uom: "box",
  category: "Storage",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
},
{
  productName: "syringes",
  description: "1 mL",
  stockQuantity: 4,
  uom: "boxes",
  category: "Syringes",
  organization: "Georgia BioEd",
  date: new Date(Date.now())
}
];

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

  // db.Product.remove({});
  try{
    db.Product.insertMany(productSeed, function(error, products){
      console.log("PRODUCTLENGTH= " + products);
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
}
