const express = require("express");
const app= express();
require("dotenv").config();
const AdminRoute = require("./routes/adminRoutes");
const bodyParser = require('body-parser');
const cors= require("cors");
const Dbcon= require("./config/dbconn");
const Port = process.env.PORT ;

app.use(bodyParser.urlencoded())

app.use(bodyParser.json())
app.use(cors());
Dbcon();



app.use("/admin", AdminRoute);



app.listen(Port, ()=>{
    console.log(`http://localhost:${Port}`);
});
