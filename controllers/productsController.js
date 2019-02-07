const db = require("../models");

// Defining methods for the productsController
module.exports = {
  findInventoryByOrganization: function (req, res) {
    organization = req.params.organization.split('_').join(' ');
    db.Product
      .find({organization: organization})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByCategoryAndOrganization: function (req, res) {
    db.Product
      .find({ category: req.params.category, organization: req.params.organization.split('_').join(' ') })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
