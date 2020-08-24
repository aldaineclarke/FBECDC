const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({ 
    firstName:String,
    lastName:String,
    email:{type:String,unique:true},
    password:{type:String, required:true},
    
});



module.exports = mongoose.model("admin", adminSchema);