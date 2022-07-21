const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({   
    firstName:String,
    lastName: String,
    middleName: { type: String, required:false},
    childAddress:String,
    dateOfBirth: { type: Date, default: Date.now },
    gender:String,
    parentOrGuardian:String,
    parentOrGuardianEmail:{ type: String, required:false},
    parentOrGuardianAddress:String,
    parentOrGuardianTel:Number,
    parentOrGuardianTel2:{ type: String, required:false},
    physician:String,
    physicianAddress:String,
    physicianOffice:String,
    physicianTel:Number,
    alergies:String,
    contact1:String,
    contact1Relation:String,
    contact1Address:String,
    contact1Tel:Number,
    contact2:{ type: String, required:false},
    contact2Relation:{ type: String, required:false},
    contact2Address:{ type: String, required:false},
    contact2Tel:{ type: Number, required:false},
    createdAt: { type: Date, default: Date.now },
    

});

module.exports = mongoose.model("Student", studentSchema);