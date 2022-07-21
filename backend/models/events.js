const mongoose = require('mongoose');
const eventsSchema = mongoose.Schema({
    title:{type:String, required:true},
    description:String,
    start:{type:Date, default:Date.now},
    end:{type:Date, default:Date.now}

});
module.exports = mongoose.model("CalandarEvent", eventsSchema);