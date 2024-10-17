const Product = require("../models/productsModel");


const getProduct =  async (req, res) =>{
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  }
  catch (error) {
    res.status(400).json({message: error.message});
  }
}

const createProduct =  async (req, res) =>{
  try {
    const products = await Product.create(req.body)
    res.status(200).json(products);
  }
  catch (error) {
    res.status(400).json({message: error.message});
  }
}

const getProductById = async (req, res) =>{
  try {
    const { id } = req.params;
    const products = await Product.findById(id)
    res.status(200).json(products);
  }
  catch (error) {
    res.status(400).json({message: error.message});
  }
}
const updateProductById = async (req, res) =>{
  try {
    const { id } = req.params;
    const products = await Product.findByIdAndUpdate(id, req.body)
    if (!products)
        return res.status(404).json({messaga: "Product not found!"})
    const updateProduct = await Product.findById(id)
    res.status(200).json(updateProduct);
  }
  catch (error) {
    res.status(400).json({message: error.message});
  }
}

const deleteProduct = async (req, res) =>{
  try {
    const { id } = req.params;
    const products = await Product.findByIdAndDelete(id);
    if (!products)
        return res.status(404).json({messaga: "Product not found!"})
    res.status(200).json({message: "product has been removed!"});
  }
  catch (error) {
    res.status(400).json({message: error.message});
}}

module.exports = {
  getProduct,
  createProduct,
  getProductById,
  deleteProduct,
  updateProductById,
}