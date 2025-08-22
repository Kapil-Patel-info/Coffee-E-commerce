const AdminModel = require("../models/adminModel");
const ProductModel = require("../models/productModel");
const OrderModel = require("../models/orderModel");
const feedbackModel  = require("../models/feedbackModel");

const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../cloudinary");



const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "myphotos", 
    format: async (req, file) => "jpg",
    public_id: (req, file) => Date.now() + "-" + file.originalname,
  },
});

const upload = multer({ storage: storage }).array("images", 10); //image size

const productSave = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).send("Error uploading files: " + err.message);
    }

    try {
      const { name, description, price, category } = req.body;
      const imageUrls = req.files.map((file) => file.path);
      const Product = await ProductModel.create({
        name: name,
        description: description,
        price: price,
        category: category,
        images: imageUrls,
        defaultImage: imageUrls[0],
      });
      
      res.status(200).send("Data saved successfully!");
    } catch (error) {
      res.status(500).send("Error saving data: " + error.message);
    }
  });
};

const adminLogin = async (req, res) => {
  const { adminid, password } = req.body;
  const Admin = await AdminModel.findOne({ adminid: adminid });
  if (!Admin) {
    res.status(401).send({ msg: "Invalid Admin ID" });
  }

  if (Admin.password != password) {
    res.status(401).send({ msg: "Invalid Credentials!" });
  }

  res.status(201).send(Admin);
};

const ourOrder = async (req, res) => {
  const Order = await OrderModel.find();
  res.status(200).send(Order);
};




const getFeedback = async(req,res)=>{

const response = await feedbackModel.find();

res.status(200).send(response);

};


const deleteProduct = async (req, res) => {
  try {
    const { id } = req.query; // get ID from query string

    if (!id) {
      return res.status(400).send({ msg: "Product ID is required" });
    }

    const deletedProduct = await ProductModel.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).send({ msg: "Product not found" });
    }

    res.status(200).send({ msg: "Product deleted successfully" });
  } catch (error) {
    res.status(500).send({ msg: "Error deleting product", error: error.message });
  }
};


module.exports = {
  adminLogin,
  productSave,
  ourOrder,
  getFeedback,
  deleteProduct
};
