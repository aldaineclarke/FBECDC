const mongoose = require("mongoose");
const { response } = require("express");
const URI = process.env.URI
const connectDB = async ()=>{
    try{
        await mongoose.connect(process.envURI, { 
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