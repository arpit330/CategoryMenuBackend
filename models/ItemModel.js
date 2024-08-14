const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  taxApplicability: { type: Boolean, default: true },
  tax: { type: Number, required: false },
  baseAmount: { type: Number, required: true },
  discount: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  subcategoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' }
});

module.exports = mongoose.model('Item', ItemSchema);
