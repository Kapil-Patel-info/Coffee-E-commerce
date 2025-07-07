const express = require("express");
const route= express.Router();
const ProductController= require("../controllers/productController");


route.get("/homedisplay", ProductController.homeDisplay);



module.exports=route;