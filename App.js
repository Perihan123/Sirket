const express=require('express');
const cors =require('cors')
const companyRoute =require('./router/companyRoute')
const productRoute=require('./router/productRoute')


const app=express();

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.status(200).json({
        header:"Header",
        body:"description"
    });
});


app.use("/company",companyRoute);
app.use("/product",productRoute);


app.listen(3000,()=>console.log("server is running"))