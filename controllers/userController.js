const bcrypt = require("bcrypt"),
      saltRounds = 10,
      db = require("../models");
// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ name: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log(req.params.userName)
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res) {
    console.log(req.params.id)
    db.User
      .findOne({userName: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body);
    bcrypt
    .hash(req.body.password, saltRounds)
    .then(function(hash) {
      //create user in database
      db.User.create({
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        school: req.body.school,
        district: req.body.district,
        course: req.body.course,
        email: req.body.email,
        password: hash
      })
        //return newly created user to the front-end
        .then(function(data) {
          res.json(data);
        })
        //catch error and return to front-end
        //ex. Email already exists in database
        .catch(function(err) {
          res.send(err);
        });
      }).catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
