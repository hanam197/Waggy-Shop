const express = require('express');
const router = express.Router();
const {getProduct, createProduct, getProductById, deleteProduct, updateProductById} = require ("../controllers/product.controller")


router.get("/", getProduct);
router.post("/", createProduct);
router.get("/:id", getProductById);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProductById);

module.exports=router;