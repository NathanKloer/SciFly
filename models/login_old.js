const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loginSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, match:[/.+@.+\..+/, "Please enter a valid e-mail address"],
  required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  // user: { type: Schema.Types.ObjectId, ref: "User" },
  date: { type: Date, default: Date.now }
});

const Login = mongoose.model("Login", loginSchema);

module.exports = Login;
