const mongoose=require('mongoose');

const Company=require("../models/Company")


exports.createCompany=async(req,res)=>{
    const {sector,name,adress,phone_number}=req.body;

    try{
        const newCompany=await Company.create({
            sector,name,adress,phone_number
        })
        res.status(201).json({
            messeage:"Company is addedd!",
            company:newCompany,
        });
    }catch(error){
        console.log("error:",error)
    }
};
exports.getProductsByCompanyId = async (req,res)=>{
    const{id}=req.params;
    const products=await Company.findOne({_id:id}).select("name -_id")

    res.status(200).json({
        products
    })
}