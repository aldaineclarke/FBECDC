const mongoose = require("mongoose");
const { response } = require("express");
const URI = (process.env.NODE_ENV === "production") ?process.env.URI : process.env.DEV_DB_URI
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