const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  product: { type: String, required: true },
  requestor: { type: String, required: true },
  quantity: { type: Number, required: true },
  description: { type: String, required: false},
  date: { type: Date, default: Date.now }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
