const mongoose = require("mongoose");



const addressSchema = {
    line_1:{ type: String, required:true},
    line_2:{ type: String, required:true},
    city:{ type: String, required:true},
    parish:{ type: String, required:true},
};

const contactSchema = {
    fullname:{ type: String, required:true},
    relationship:{ type: String, required:true},
    address:addressSchema,
};


const studentSchema = new mongoose.Schema({   
    fname:{
        type: String, 
        required:false, 
    },
    lname: {
        type: String, 
        required:false, 
    },
    mname: { 
        type: String, 
        required:false
    },
    dateOfBirth: { 
        type: Date, 
        default: ()=> Date.now() 
    },
    gender:{
        type: String, 
        required:false,
    },
    parentOrGuardian:{
        type: String, 
        required:false, 
    },
    parentOrGuardianEmail:{ 
        type: String, 
        required:false
    },
    parentOrGuardianAddress:addressSchema,
    parentOrGuardianTel:{
        type: String, 
        required:false,

    },
    physician:{
        type: String, 
        // required:false,
        
    },
    physicianAddress:addressSchema,
    physicianOffice:{
        type: String, 
        // required:false, 
    },
    physicianTel:{
        type: String, 
        // required:false,
        
    },
    alergies:{
        type: String, 
        required:false,
        
    },
    contacts:[{
        fullname:{ type: String, required:true},
        relationship:{ type: String, required:true},
        address:addressSchema,
    }], 
    createdAt: { type: Date, default: Date.now },
    
});


const Student = mongoose.model("Student", studentSchema);

module.exports = Student;