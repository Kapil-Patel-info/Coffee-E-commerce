const UserModel = require("../models/userModel");

const userSignUp=async(req, res)=>{
    const { name, city, address, email, password, pincode} = req.body;
    const User = await UserModel.create({
      name:name,
     city:city,
     address:address,
     pincode:pincode,
     email:email,
     password:password
    })
    res.status(200).send({msg:"User Succesfully Registered!!!"});
}


module.exports={
    userSignUp
}