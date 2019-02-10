const nodemailer = require('nodemailer');
require("dotenv").config();
const db = require("../models");

// Defining methods for the OrdersController
module.exports = {
  createOrder: function (req, res) {
    let id = req.body._id;
    const productData = [];
    for (let i = 0; i< req.body.data.length;i++) {
      productData.push({
        productQuantity: req.body.data[i].productQuantity,
        product: req.body.data[i]._id
      })
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
              user: id,
              products: productData
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
    //********** */ Send Email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'parts2pieces.info@gmail.com',
        pass: process.env.gmailPassword
      }
    });

    const mailOptions = {
      from: 'parts2pieces.info@gmail.com',
      to: `phillip.grider@gmail.com , ${data[0].user.email}`,
      subject: `Your Recent Order ID#: ${data[0]._id}`,
      text:`Your order has been submited \n\n
            Someone will be in touch to schedule an appoitment`
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
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
