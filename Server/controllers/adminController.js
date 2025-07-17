const AdminModel= require("../models/adminModel");
const ProductModel= require("../models/productModel");
const OrderModel = require("../models/orderModel");
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../cloudinary');

// Set up Cloudinary storage for multer
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'myphotos', // folder name Cloudinary account
        format: async (req, file) => 'jpg', // supports promises as well
        public_id: (req, file) => Date.now() + '-' + file.originalname,
    },
});

const upload = multer({ storage: storage }).array('images', 10); //image size

const productSave = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).send("Error uploading files: " + err.message);
        }

        try {
            const { name, description, price, category } = req.body;
            const imageUrls = req.files.map(file => file.path);
            const Product= await ProductModel.create({
                 name:name, 
                description:description, 
                price:price, 
                category:category,
                images:imageUrls,
                defaultImage:imageUrls[0]
            })
           res.status(200).send("Data saved successfully!");
        } catch (error) {
            res.status(500).send("Error saving data: " + error.message);
        }
    });
   
}





const adminLogin=async(req, res)=>{
    const { adminid , password } = req.body;  
    const Admin= await AdminModel.findOne({adminid:adminid});
    if (!Admin)
    {
        res.status(401).send({msg:"Invalid Admin ID"});
    }

    if (Admin.password!=password)
    {
         res.status(401).send({msg:"Invalid Credentials!"});
    }

  
    res.status(201).send(Admin);

}

const ourOrder=async(req, res)=>{
    const Order= await OrderModel.find();
    res.status(200).send(Order);
}


module.exports={
    adminLogin,
    productSave,
    ourOrder
}
