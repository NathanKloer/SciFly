const db = require("../models");

// Defining methods for the productsController
module.exports = {
  findByOrganization: function (req, res) {
    // console.log("In findByOrganization");
    db.Product
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByCategory: function (req, res) {
    // console.log("In findByCategory");
    db.Product
      .find({ category: req.params.category })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  // ,
  // findAll: function (req, res) {
  //   db.Product
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // findById: function (req, res) {
  //   db.Product
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // create: function (req, res) {
  //   db.Product
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function (req, res) {
  //   db.Product
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function (req, res) {
  //   db.Product
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
