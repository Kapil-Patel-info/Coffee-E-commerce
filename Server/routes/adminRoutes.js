const express = require("express");
const route = express.Router();
const adminController = require("../controllers/adminController");


route.post("/adminLogin",adminController.adminLogin);


module.exports = route;