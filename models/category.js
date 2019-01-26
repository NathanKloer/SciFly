const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  category: {
    type: String, required: true
  },
  products:[{
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Product model
      ref: "Product"
  }],

  date: { type: Date, default: Date.now },
  });

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
