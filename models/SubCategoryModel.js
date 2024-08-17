const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
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
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

// Creating a compound unique index to ensure that names are unique within each category
subCategorySchema.index({ categoryId: 1, name: 1 }, { unique: true });

module.exports = mongoose.model("SubCategory", subCategorySchema);
