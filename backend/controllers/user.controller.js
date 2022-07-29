const User = require("../models/user.schema");
class UserController{
    /**
     *### Description 
     * This route handler will get the data from the body of the request and create a user with the data
     */
    static async createUser(req, res, next){
        try{
            let user = await User.create(req.body).save();
            res.status(200).json({
                message:"Successfully Created",
                data:{
                    user
                }
            })

        }catch(error){
            if(error.message){
                res.status(404).json({
                    message: error.message
                })
            }else{
                res.status(500).json({
                    message: "There was an error with the server"
                })
            }
        }
    }
    /**
     *### Description 
     * This route handler will retrieve all users found in the database.
     */
    static async getAllUsers(req, res, next){
        try{
            let users = await User.find();
            res.status(200).json({
                message:"Successfully Deleted",
                data:{
                    users
                }
            })

        }catch(error){
            if(error.message){
                res.status(404).json({
                    message: error.message
                })
            }else{
                res.status(500).json({
                    message: "There was an error with the server"
                })
            }
        }
    }

    /**
     *### Description 
     * This route angular will get the data from the body of the request and create a user with the data
     */
    static async getUserByEmail(req, res, next){
        try{
            let id = req.params.id;
            let user = await User.findById(id);
            res.status(200).json({
                message:"Successfully Deleted",
                data:{
                    user
                }
            })

        }catch(error){
            if(error.message){
                res.status(404).json({
                    message: error.message
                })
            }else{
                res.status(500).json({
                    message: "There was an error with the server"
                })
            }
        }
    }
        /**
     *### Description 
     * This route handler will get a single user based on the id that is found in the url, then return the user that matches the id.
     */
    static async getUserById(req, res, next){
        try{
            let id = req.params.id;
            let user = await User.findById(id);
            res.status(200).json({
                message:"Successfully Deleted",
                data:{
                    user
                }
            })

        }catch(error){
            if(error.message){
                res.status(404).json({
                    message: error.message
                })
            }else{
                res.status(500).json({
                    message: "There was an error with the server"
                })
            }
        }
    }
        /**
     *### Description 
     * This route handler will delete a user using the id that is passed in the route params. 
     */
    static async deleteUser(req, res, next){
        try{
            let id = req.params.id;
            await User.findByIdAndDelete(id);
            res.status(200).json({
                message:"Successfully Deleted"
            })

        }catch(error){
            if(error.message){
                res.status(404).json({
                    message: error.message
                })
            }else{
                res.status(500).json({
                    message: "There was an error with the server"
                })
            }
        }
    }
        /**
     *### Description 
     * This route handler will update the user which matches the id that is found in the route params, with the data that is sent in the body of the request. 
     */
    static async updateUser(req, res, next){
        try{
            let id = req.params.id;
            let user = await User.findByIdAndUpdate(id, req.body,{new:true});

            res.status(200).json({
                message: "Successfully Updated",
                data: {
                    user
                }
            })
        }catch(error){
            if(error.message){
                res.status(404).json({
                    message: error.message
                })
            }else{
                res.status(500).json({
                    message: "There was an error with the server"
                })
            }
            
        }
    }
    
}

module.exports = UserController;