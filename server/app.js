const express = require("express")
const app = express()


app.get("/",(req,res) => {
    res.send("naber")
})

app.listen(5000,() => {
    console.log("Server is running")
})