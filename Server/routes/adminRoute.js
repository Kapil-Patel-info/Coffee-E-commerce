const express = require("express");
const route= express.Router();
const AdminController= require("../controllers/adminController");


route.post("/adminlogin", AdminController.adminLogin);
route.post("/productsave", AdminController.productSave);
route.get("/ourorder", AdminController.ourOrder);
route.get("/feedback",AdminController.getFeedback);

route.delete("/deleteProduct",AdminController.deleteProduct);


module.exports=route;