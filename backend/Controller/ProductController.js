const Product = require("../models/ProductModel")
const Features = require("../utils/Features")

/* CREATE PRODUCT ---Admin */
exports.createProduct = async (req,res,next)=>{
    const product = await Product.create(req.body)

    res.status(201).json({
        success:true,
        product
    })
}

/* GET ALL PRODUCTS  */
exports.getAllProducts = async (req,res,next)=>{
    const resultPerPage = 8

    const feature = new Features(Product.find(), req.query).search().filter().pagination(resultPerPage)

    const products = await feature.query

    res.status(200).json({
        success:true,
        products
    })
}

/* UPDATE PRODUCT ---Admin */
exports.updateProduct = async (req,res,next)=>{
    let product = await Product.findById(req.params.id)
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product is not found with this id"
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true,
        useUnified: false
    })
    res.status(200).json({
        success: true,
        product
    })
}

/* DELETE PRODUCT ---Admin */
exports.deleteProduct = async (req,res,next)=>{
    const product = await Product.findById(req.params.id)
    if(!product){
        return res.status(500).json({
            success: false,
            message:"Product is not found with this id"
        })
    }
    await Product.deleteOne(product)

    res.status(200).json({
        success: true,
        message: "Product deleted successfully"
    })
}

/* SINGLE PRODUCT DETAILS */
exports.getSingleProduct = async (req,res,next)=>{
    const product = await Product.findById(req.params.id)
    if(!product){
        return res.status(500).json({
            success: false,
            message:"Product is not found with this id"
        })
    }

    res.status(200).json({
        success: true,
        product
    })
}