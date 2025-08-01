const express = require("express");
const route = express.Router();
const UserController = require("../controllers/userController");

route.post("/registration", UserController.userSignUp);
route.post("/login", UserController.userLogin);
route.post("/authuser", UserController.userAuth);
route.get("/getuser", UserController.getUser);
route.post("/feedback", UserController.feedback);
route.get("/allUsers", UserController.allUsers);

module.exports = route;
