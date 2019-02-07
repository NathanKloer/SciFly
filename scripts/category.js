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
  main);

//STEP 1: Get Category Data:
/***************************/
function main(){
  retrieveOrganizations("organization");
  retrieveCategories("category", "Georgia BioEd");
  findByOrganization("Georgia BioEd");
}//main

retrieveCategories = (field, organization) => {
  try{
      db.Product.distinct(field).and({ organization: organization }).exec(function(error, results){
      console.log(results)
    });
  }
  catch(e){
    console.log("error = "+e);
    process.exit(1);
  }
}

  retrieveOrganizations = (field) => {
  try{
    db.Product.distinct(field).exec(function(error, results){
      console.log(results)
    });
  }
  catch(e){
    console.log("error = "+e);
    process.exit(1);
  }

  findByOrganization = (organization) => {
    db.Product
      .find({ organization: organization })
      .then(dbModel => {
      console.log(JSON.stringify(dbModel));
    })
      .catch(err => res.status(422).json(err));
  }

  }//main
