const mongoose = require("mongoose");
const { response } = require("express");
const FBECDC_code = process.env.MDBpass;
const URI = `mongodb+srv://SlyMamba:${FBECDC_code}@fbecdc.1xfyc.mongodb.net/FBECDC?retryWrites=true&w=majority`;
const connectDB = async ()=>{
    try{
        await mongoose.connect(URI, { 
            useNewUrlParser: true , 
            useUnifiedTopology: true,
            useCreateIndex:true } 
            );
        console.log("Database was connected"); 
    }catch(error){
        response.statusCode = 504;
        console.log("database was not able to be connected. This is the error \n",error);
    }

}

module.exports = connectDB;