
import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({})
    res.status(200).json({success:true, data:products})
    
  } catch (error) {
    console.log("error in fetching data", error.message)
    res.status(500).json({
      success: false,
      message:"Server error"
    })
  }
}
export const createProducts = async (req, res) => {

  const product = req.body

  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({
      success:true,message:"Please provide all the fields"
    })
  }
  const newProduct = new Product(product)

  try {
    await newProduct.save()
    res.status(201).json({
      success: true,
      data:newProduct
    })
  } catch (error) {
    console.log("Error in Creating Product", error.message)
    res.status(500).json({
      success: false,
      message:"Server Error"
    })
  }


}
export const updateProducts =  async (req, res) => {
  const { id } = req.params
  const product = req.body
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({
      success:false,
      message:"Invalid Product ID"
    })
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true }) 
  res.status(200).json({
    success:true,
    data: updatedProduct,
    message:"Update Successfully"
  })

  } catch (error) {
    console.log("error in updating data", error.message)
    res.status(500).json({
      success: false,
      message:"Server Error"
    })
  }


}
export const deleteProducts = async (req, res) => {
  const { id } = req.params
  try {
    await Product.findByIdAndDelete(id)
    res.status(200).json({
      success: true,
      message:"Product Deleted Successfully"
    })
  } catch (error) {

  }
}