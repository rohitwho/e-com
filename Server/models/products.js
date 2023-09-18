const { model, Schema } = require("mongoose");

const productSchema = new Schema({
  listType:{
    type:String
  },
  productName: {
    type: String,
  },
  productImages: {
    type: String,
  },
  productDescription: {
    type: String,
  },
  productRating: {
    type: Number,
  },
  productCategory: {
    type: String,
  },
  productPrice: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const ProductList = model("ProductList", productSchema);

module.exports = ProductList;
