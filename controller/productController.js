const express=require('express')
const Company =require('../models/Company')
const Product =require('../models/Product')


exports.createProduct=async (req,res)=>{
  const{companyId}=req.params;
  const{  category, name, production_date, expriration_date, piece}=req.body;

  const getCompany=await Company.findOne({_id:companyId}) 
  if(!getCompany)
  res.status(403).json({messeage:"Unauthorized",description :"Company is not found"})
   

 const product=await Product.create({
    category,
    name,
    production_date,
    expriration_date,
    piece

 }) ;
 getCompany.product.unshift(product._id);
 getCompany.save();

 res.status(201).json({
    messeage:'succesed',
    company:getCompany,
    product,
 })
}

exports.getAllProduct=async (req,res)=>{
    const product=await Product.find({})
    res.json({
        products
    });
};