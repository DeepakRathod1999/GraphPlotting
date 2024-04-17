const mongoose =require("mongoose");
const sample=require("./models/sample.cjs");
const data=require('./sample-data.json')


const uri="mongodb://localhost:27017/Mydb";
const connectDB=()=>{
    console.log("db connected...")
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
}


const start=async ()=>{
    try{

        await connectDB();
        await sample.create(data);
        console.log("success");

    }catch(err){
        console.log(err);
    }
}

start();