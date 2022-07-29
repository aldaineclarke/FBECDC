const Student = require("../models/student.schema");

class StudentsController {
    static async getAllStudents(req, res, next){
        try{
            let students = await Student.find()
            res.status(200).json({
                status:"Success",
                data:{
                    students
                }
            })
        }catch(error){
            res.status(404).json({message: "Bad Request"})
        }
    }
    static async getStudentById(req, res, next){
        try{
            let id = parseInt(req.params.id);
            let student = await Student.findById(id)
            res.status(200).json({
                status:"Success",
                data:{
                    student
                }
            })
        }catch(error){
            res.status(404).json({message: "Bad Request"})
        }
    }
    static async UpdateStudent(req, res, next){
        try{
            let id = parseInt(req.params.id);
            let student = await Student.findByIdAndUpdate(id);
            res.status(200).json({
                status:"Success",
                data:{
                    student
                }
            })
        }catch(error){
            res.status(404).json({message: "Bad Request"})
        }
    }

    static async deleteStudentById(req, res, next){
        try{
            let id = parseInt(req.params.id);
            await Student.findByIdAndDelete(id);            
            res.status(200).json({
                status:"Success",
                data:{
                    students
                }
            })
        }catch(error){
            res.status(404).json({message: "Bad Request"})
        }
    }
    static async createStudent(req, res, next){
        try{
            let student = await Student.create(req.body);
            console.log(req.body);
            res.status(200).json({
                message:"success",
                data:{
                    student
                }
            })
        }catch(error){
            res.status(404).json({
                error: error.message,
                message: "Bad Request"
            })
        }
    }

}

module.exports = StudentsController;
