const mongoose = require('mongoose')


const friendSchema = new mongoose.Schema({
    id:{
        type: Number,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})

mongoose.model("Friend",friendSchema)