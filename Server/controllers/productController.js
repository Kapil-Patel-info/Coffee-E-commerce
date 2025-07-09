const ProductModel = require("../models/productModel");

const homeDisplay = async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.status(200).send(products);
    } catch (err) {
        res.status(500).send("Something went wrong");
    }
};


const productDetail = async (req, res) => {
    try {

        const { id } = req.params;
        const product = await ProductModel.findById(id);
        if (!product) {
            return res.status(404).send("Product not found");
        }
        res.status(200).send(product);
    } catch (err) {
        res.status(500).send("Error fetching product");
    }
};

module.exports = {
    homeDisplay,
    productDetail
};
