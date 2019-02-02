const bcrypt = require("bcrypt"),
      saltRounds = 10,
      db = require("../models");
// Defining methods for the booksController
module.exports = {
  findOne: function(req, res) {
    db.User
      .findOne({userName: req.body.userName})
      .then(dbModel =>
        bcrypt
        .compare(req.body.password, dbModel.password)
        .then(function(valid) {
          //check if the password provided matches the stored password
          if (valid) {
            res.status(200).send(dbModel);
          } else {
            res.send("Incorrect Password");
          }
        })
        .catch(function(err) {
          res.send("Not Found");
          console.error(err);
          res.end();
        })
      )
      .catch(err => res.status(422).json(err));
      }
    }
