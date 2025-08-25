const express = require("express");
const route= express.Router();
const ProductController= require("../controllers/productController");


route.get("/homedisplay", ProductController.homeDisplay);
route.get("/productdisplay", ProductController.productDisplay);
route.get("/search",ProductController.searchPage);



module.exports=route;




