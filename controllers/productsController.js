const db = require("../models");

// Defining methods for the productsController
module.exports = {
  findInventoryByOrganization: function (req, res) {
    let organization = req.params.organization.split('_').join(' ');
    db.Product
      .find({organization: {$regex: new RegExp('^' +organization.toLowerCase(), 'i')}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByCategoryAndOrganization: function (req, res) {
    let organization = req.params.organization.split('_').join(' ');
    db.Product
      .find({ category: req.params.category, organization: {$regex: new RegExp('^' +organization.toLowerCase(), 'i')}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findInventoryItem: function (req, res) {
    db.Product
      .findOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
