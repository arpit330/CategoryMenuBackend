const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  taxApplicability: {
    type: Boolean,
    default: true,
  },
  tax: {
    type: Number,
    required: false,
  },
  baseAmount: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: false,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  subcategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubCategory",
    validate: {
      validator: function (value) {
        // Ensure that if subcategoryId is provided, categoryId must also be present
        return this.categoryId != null;
      },
      message: "subcategoryId requires a valid categoryId",
    },
  },
});

// Automatically calculate totalAmount based on baseAmount and discount
ItemSchema.pre("save", function (next) {
  this.totalAmount = this.baseAmount - this.discount;
  next();
});

module.exports = mongoose.model("Item", ItemSchema);
