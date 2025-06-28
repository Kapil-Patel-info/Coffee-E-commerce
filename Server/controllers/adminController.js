const adminModel = require("../models/adminModel");


const adminLogin = (req,res)=>{
    console.log("hasing solting done ");
    res.send("Admin login successful");
}



module.exports = {
    adminLogin
}
