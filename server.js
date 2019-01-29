const express = require("express");

const mongoose = require("mongoose");

//Change-1a this line to go directly to products
/************************************************/
// const routes = require("./routes/api/products");
/************************************************/
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

//Change-1b this line to go use path module (not needed)
/************************************************/
// const path = require('path')
/************************************************/

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  //Change-2 this line to go directly to products
  /************************************************/
  // app.use(express.static("./client/build/index.html"));
  /************************************************/
  app.use(express.static("./client/build"));
}

//Change-3 Defined new routes:
/************************************************/
// app.use('/', function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build"));
// })
// app.get('/test', function(req, res){
//   res.send('works')
// })
// // Add routes, both API and view
// app.use('/api', routes);
/************************************************/
// Add routes, both API and view
app.use(routes);



// Connect to the Mongo DB
// mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/scifly");

// Define API routes here

// Change-4: Commented out:
/************************************************/
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
 res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
/************************************************/

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
