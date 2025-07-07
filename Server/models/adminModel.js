const mongoose= require("mongoose");
const adminSchema= new mongoose.Schema({
     adminid:String,
     password:String
})
module.exports = mongoose.model("admin", adminSchema);