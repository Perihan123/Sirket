const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const productSchema=new Schema({
    category:String,
    name:String,
    production_date:Date,
    expriration_date:Date,
    piece:Number
});

module.exports=mongoose.model('product',productSchema)