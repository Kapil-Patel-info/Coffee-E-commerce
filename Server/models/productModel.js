const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  description: String,
  images: [String], 
});

module.exports = mongoose.model('Product', ProductSchema);
