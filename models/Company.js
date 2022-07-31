const mongoose=require('mongoose')

const Schema=mongoose.Schema;

const companySchema=new Schema({
    sector:{
        type:String,
        unique:true,
        required:true
    },
    name:{
        type:String,
        unique:true,
        required:true,
    },
    adress:{
        type:String,
        unique:true,
        required:true,
    },
    phone_number:{
        type:Number,
        unique:true,
        required:true,
    },
    product:[
        {
            type:mongoose.Types.ObjectId,
            ref:""
        }
    ]
})

module.exports=mongoose.model("company",companySchema);