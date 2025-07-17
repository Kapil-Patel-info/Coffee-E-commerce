const UserModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');


const userSignUp=async(req, res)=>{
    const { name, city, address, email, password, pincode} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const User = await UserModel.create({
      name:name,
     city:city,
     address:address,
     pincode:pincode,
     email:email,
     password:hashedPassword
    })
    res.status(200).send({msg:"User Succesfully Registered!!!"});
}

const userLogin=async(req, res)=>{
    const user = await UserModel.findOne({ email: req.body.email });
    try{
        const match = await bcrypt.compare(req.body.password, user.password);

        const accessToken = jwt.sign(JSON.stringify(user), process.env.TOKEN_SECRET)
        if(match){
            res.json({ accessToken: accessToken });
        } else {
            res.json({ message: "Invalid Credentials" });
        }
    } catch(e) {
        console.log(e)
    }
}


const userAuth=async(req, res)=>{
    const token = req.header("x-auth-token");
     if (!token) return res.json(false);
  const verified = jwt.verify(token, process.env.TOKEN_SECRET);
  console.log(verified);

  if (!verified) return res.json(false);
  const user = await UserModel.findById(verified._id);

  if (!user) return res.json(false);

    return res.json(user);
}

const getUser=async(req, res)=>{
     const User= await UserModel.findById(req.query.userid);
     console.log(User);
     res.send(User);
}

module.exports={
    userSignUp,
    userLogin,
    userAuth,
    getUser
}