
const express = require('express') 
const app=express() 
require('dotenv').config() 
const port = process.env.PORT || 8080 
const cors = require('cors')
const planRouter = require("./routes/planRouter")  
const {connection}=require('./db')
app.use(express.json()) 
app.use(cors()) 
app.use("/plan",planRouter)
app.listen(port,async()=>{
    try{
   await connection 
  console.log('Connected to Mongodb,server running @',port)
    } 
    catch(error){
        console.log(error) 
        console.log("not able to connect")
    }
})