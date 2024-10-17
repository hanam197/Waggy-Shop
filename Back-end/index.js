const express = require('express')
const app = express()
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const cors = require("cors")
const dotenv = require("dotenv")
const multer = require("multer")
const connectMongodb = require('./config/db')
const env = require("./config/enviroment")
const productRoutes = require("./routes/product.route")
dotenv.config();


//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/products", productRoutes);


app.listen(env.PORT, () => console.log(`Server is running on port ${env.PORT}`));
connectMongodb();

