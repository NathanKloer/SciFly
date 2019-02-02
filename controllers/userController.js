const bcrypt = require("bcrypt"),
      saltRounds = 10,
      db = require("../models");
// Defining methods for the booksController
module.exports = {

  findOne: function(req, res) {
    db.User
      .findOne({userName: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, response) {
    db.User
    .findOne({userName: req.body.userName})
    .then(dbModel => {
        if(dbModel === null){
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
              //ex. Username already exists in database
              .catch(function(err) {
                response.json("this error"+err);
              });
            })
          .catch(err => {
            res.send(err);
          })
          }else{
         response.json("Already Exist")
        }
      })
    .catch(err =>res.send("FindOneerror " + err));
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
