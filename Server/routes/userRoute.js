const express = require("express");
const route= express.Router();
const UserController= require("../controllers/userController");


route.post("/registration", UserController.userSignUp);



module.exports=route;