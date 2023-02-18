const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://Archit2311:vitmphostel@cluster0.bzesm0v.mongodb.net/mern-rooms'
mongoose.connect(mongoURL, {useUnifiedTopology : true, useNewUrlParser:true})

var connection = mongoose.connection 
connection.on('error', ()=>{
    console.log('MongoDB connection failed')
})

connection.on('connected', ()=>{
    console.log("MongoDB connection successy")
})

module.exports = mongoose














