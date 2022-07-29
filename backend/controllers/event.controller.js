const Event = require("../models/event.schema");
class EventController{

    /**
     * ### Description
     * Creates a new event from the data that is passed in the body of the request. 
     */
    static async createEvent(req, res, next){
        try{
            let event = await Event.create(req.body);
            res.status(200).json({
                message:"Successfully Deleted",
                data:{
                    event
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
     * Gets all the events saved in the database. 
     */
    static async getAllEvents(req, res, next){
        try{
            let event = await Event.find();
            res.status(200).json({
                message:"Successfully Deleted",
                data:{
                    event
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
     * Gets a single event using the id that is passed in the route params as an identifier for the event. 
     */
    static async getSingleEvent(req, res, next){
        try{
            let id = req.params.id
            let event = await Event.findById(id);
            res.status(200).json({
                message:"Successfully Deleted",
                data:{
                    event
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
     * Updates the event with the data that is passed in the body of the request. 
     */
    static async updateEvent(req, res, next){
        try{
            let id = req.params.id
            let event = await Event.findByIdAndUpdate(id, req.body, {new:true});
            res.status(200).json({
                message:"Successfully Deleted",
                data:{
                    event
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
     * Deletes an event using the id that is passed from the route params.
     */
    static async deleteEvent(req, res, next){
        try{
            let id = req.params.id
            await Event.findByIdAndDelete(id);
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

module.exports = EventController;