const ProductModel= require("../models/productModel");


const homeDisplay=async(req, res)=>{
    const Product = await ProductModel.find();
    res.status(200).send(Product);
}

module.exports={
    homeDisplay
}