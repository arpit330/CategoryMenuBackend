const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  taxApplicability: { type: Boolean, required: true },
  tax: { type: Number, required: false },
  taxType: { type: String }
});

module.exports = mongoose.model('Category', CategorySchema);
