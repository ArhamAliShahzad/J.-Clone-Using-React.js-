const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  description: String,
  imageUrl: String,
  stock: { type: Number, default: 0, min: 0 },
});

module.exports = mongoose.model('Product', productSchema)