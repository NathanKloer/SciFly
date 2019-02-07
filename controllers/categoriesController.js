const db = require("../models");

// Defining methods for the productsController
module.exports = {
  findCategoryValues: function (req, res) {
    let organization = req.params.organization.split('_').join(' ');
    let field = "category";
    db.Product.distinct(field).and({ organization: organization })
    .then(dbModel => {
          res.json(dbModel);
        })
    .catch(err => res.status(422).json(err));
  }
};
