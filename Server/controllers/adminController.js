const AdminModel= require("../models/adminModel");
const ProductModel= require("../models/productModel");
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../cloudinary');

// Set up Cloudinary storage for multer
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'myphotos', 
        format: async (req, file) => 'jpg', 
        public_id: (req, file) => Date.now() + '-' + file.originalname,
    },
});

const upload = multer({ storage }).array('images', 10);

const productSave = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error("Upload error:", err);
      return res.status(500).send("Upload failed: " + err.message);
    }

    try {
      const { name, description, price, category } = req.body;
      const imageUrls = req.files.map(file => file.path);

      const product = await ProductModel.create({
        name,
        description,
        price,
        category,
        images: imageUrls,
        defaultImage: imageUrls[0]
      });

      res.status(200).send("Product saved!");
    } catch (error) {
      console.error("Save error:", error);
      res.status(500).send("Save failed: " + error.message);
    }
  });
};





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



module.exports={
    adminLogin,
    productSave
}
