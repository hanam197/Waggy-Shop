const mongoose = require("mongoose");
const {Schema} = mongoose;

const reviewSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
}
)


const ProductSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: 
  {
    required: [true, "Please enter name product"],
    type: String,
  },
  brand:
  {
    required: true,
    type: String,
  },
  description:
  {
    required: true,
    type: String,
  },
  atributes: {
    size: {}
  },
  reviews: [reviewSchema],
  numberReview:
  {
    required: true,
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0,
  },
  image: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  }
},
{
timestamps: true
}
)

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;