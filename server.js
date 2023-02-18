const express = require("express");
const app = express()
const db=require('./db')
app.use(express.json())
const path = require('path')

const roomsRoutes = require("./routes/roomsRoute")
const userRoute = require('./routes/userRoute')

app.use('/api/rooms',roomsRoutes)
app.use('/api/users' , userRoute)
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
})