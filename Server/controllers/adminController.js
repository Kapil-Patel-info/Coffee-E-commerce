const adminModel = require("../models/adminModel");
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });
const Product = require('../models/productModel');  // updated product model with images: [String]


const uploadProduct = async (req, res) => {
  try {
    const { name, category, price, description } = req.body;

    const imageUrls = req.files.map(file => file.path); // multer + Cloudinary adds 'path'

    const newProduct = new Product({
      name,
      category,
      price,
      description,
      images: imageUrls, // assuming your schema supports an array
    });

    await newProduct.save();
    res.status(200).json({ message: 'Product uploaded', product: newProduct });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Product upload failed' });
  }
};

const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await adminModel.findOne({ email });

    if (!response) {
      return res.status(401).send("Invalid email");
    }

    if (response.password !== password) {
      return res.status(401).send("Invalid password");
    }

    res.status(200).send({ message: "Login Successful", response });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).send("Server error");
  }
};

module.exports = {
  adminLogin,
  uploadProduct
};
