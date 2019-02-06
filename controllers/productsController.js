const db = require("../models");

// Defining methods for the productsController
module.exports = {
  findByOrganization: function (req, res) {
    db.Product
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByCategory: function (req, res) {
    db.Product
      .find({ category: req.params.category })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
