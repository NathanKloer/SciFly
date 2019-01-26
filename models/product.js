const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productName: { type: String, required: true },
  description: { type: String, required: true },
  stockQuantity: { type: Number, required: true },
  uom: { type: String, required: true },
  category: { type: String, required: true},
  organization: { type: String, required: true},
  location: {type: String, required: false},
  date: { type: Date, default: Date.now }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
