const express = require("express")
const app = express()
const mongoose = require("mongoose")
// const bodyParser = require("body-parser")
// const cookieParser = require("cookie-parser")
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



const {User} = require("./models/user")

// app.use(bodyParser.urlencoded({ extended : true })); 
// app.use(bodyParser.json());
app.use(express.json())

// app.use(cookieParser())



app.post("/api/users/register",(req,res) => {
    const user = new User(req.body);

    user.save((err,doc) => {
        if(err) {
            return res.status(404).json({err})
        }
        return res.json({messages:true,user:doc})
    })
})


app.get("/",(req,res) => {
    res.send("naber")
})

app.listen(5000,() => {
    console.log("Server is running")
})