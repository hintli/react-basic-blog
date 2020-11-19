const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true    
}).then(() => {
    console.log("mongoose is connected")
}).catch(err => {
    console.error(err)
})

app.get("/",(req,res) => {
    res.send("naber")
})

app.listen(5000,() => {
    console.log("Server is running")
})