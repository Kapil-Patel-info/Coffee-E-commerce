const productModel = require("../models/productModel");
const ProductModel= require("../models/productModel");


const homeDisplay=async(req, res)=>{
    const Product = await ProductModel.find();
    res.status(200).send(Product);
}

const productDisplay=async(req, res)=>{
    const {id} = req.query;
    const Product= await productModel.findById(id); 
    res.status(200).send(Product);
}

const searchPage = async(req, res) => {
  const { q } = req.query;

  try {
    const products = await productModel.find({
      $or: [
        { name: { $regex: q, $options: "i" } }, { description: { $regex: q, $options: "i" } },
        { category: { $regex: q, $options: "i" } }
      ]
    });

    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Search failed" });
  }
};



module.exports={
    homeDisplay,
    productDisplay,
    searchPage
}


