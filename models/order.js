const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  // product: { type: String, required: true },
  // requestor: { type: String, required: true },
  // quantity: { type: Number, required: true },
  // description: { type: String, required: false},
  ordered: {
    type: Boolean
  },
  user: {
    type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "User"
  },
  products: [
    {
      productQuantity: { type: Number, required: true},
      product: {
        // Store ObjectIds in the array
        type: Schema.Types.ObjectId,
        // The ObjectIds will refer to the ids in the Note model
        ref: "Product"
      }
    }
  ],
  date: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
