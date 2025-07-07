const mongoose= require("mongoose");
const productSchema= new mongoose.Schema({
     name:String, 
     description:String, 
     price:Number, 
     category:String,
     images:[String],
     defaultImage:String
})
module.exports = mongoose.model("product", productSchema);