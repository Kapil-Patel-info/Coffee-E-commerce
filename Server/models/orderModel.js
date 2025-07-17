const mongoose= require("mongoose");
const orderSchema= new mongoose.Schema({
    amount:Number,
    products:String, 
    clientname:String,
    city:String, 
    address:String,
    pincode:Number, 
    email:String
}, { timestamps: true })
module.exports = mongoose.model("order", orderSchema);