const Post = require("../models/post.schema")
class PostController{
    /**
     * ### Description
     * Creates a new post from the data that is passed in the body of the request. 
     */
    static async createPost(req, res, next){

    try{
            let post = await Post.create(req.body);
            res.status(200).json({
                message:"Successfully Deleted",
                data:{
                    post
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
     * ### Description
     * Gets all posts from the database. 
     */
    static async getAllPosts(req, res, next){
        try{
            let post = await Post.find();
            res.status(200).json({
                message:"Successfully Deleted",
                data:{
                    post
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
     * ### Description
     * Gets a single post that matches the id that is found in the route parameters
     */

    static async getSinglePost(req, res, next){
        try{
            let id = req.params.id;
            let post = await Post.findById(id);
            res.status(200).json({
                message:"Successfully Deleted",
                data:{
                    post
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
     * ### Description
     * Updates a post with information passed in the body of the request. The post is found using the id that is in the route
     */
    static async updatePost(req, res, next){
        try{
            let id = req.params.id;
            let post = await Post.findByIdAndUpdate(id, req.body, {new: true});
            res.status(200).json({
                message:"Successfully Deleted",
                data:{
                    post
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
     * ### Description
     * Deletes the post that is found that matches the id found in the route parameters 
     */
    static async deletePost(req, res, next){
        try{
            let id = req.params.id;
            await Post.findByIdAndDelete(id);
            res.status(200).json({
                message:"Successfully Deleted",
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

module.exports = PostController;