const mongoose= require("mongoose");
const userSchema= new mongoose.Schema({
     name:String,
     city:String,
     address:String,
     pincode:Number,
     email:String,
     password:String
})
module.exports = mongoose.model("user", userSchema);