// models/Product.js
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  price: Number,
  category: String,
  rating: Number,
  createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', ProductSchema);


export default Product;
