const express = require("express");
const app= express();
require("dotenv").config();
const AdminRoute = require("./routes/adminRoutes.js");
const bodyParser = require('body-parser');
const cors= require("cors");
const Dbcon= require("./config/dbconn");
const Port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(cors());
Dbcon();



app.use("/admin", AdminRoute);



app.listen(Port, ()=>{
    console.log(`http://localhost:${Port}`);
});
