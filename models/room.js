const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({

    name: {
        type: String,
        required:true
    },
    maxcount:{
        type:Number,
        required:true
    },
    fees:{
        type:Number,
        required:true
    },
    imageUrls:[],
    currentbookings : [],

    type:{
        type:String,
        required:true
    }
},{
        timestamps:true,
    })

const roomModel = mongoose.model('rooms', roomSchema)

module.exports = roomModel