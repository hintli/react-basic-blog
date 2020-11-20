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


app.post("/api/user/login", (req, res) => {

    User.findOne({ email: req.body.email }, (err, user) => { 
        if (!user) 
        return res.json({ 
            loginSuccess: false, 
            message: "Auth failed, email not found" 
        }); 


user.comparePassword(req.body.password, (err, isMatch) => {
    if (!isMatch) {
      return res.json({ loginSuccess: false, message: "wrong password" });
    }
  });


  //generateToken
  user.generateToken((err, user) => {
    if (err) return res.status(400).send(err);
    res
      .cookie("x_auth", user.token)
      .status(200)
      .json({
        loginSuccess: true
      });
  });
});
});


app.get("/",(req,res) => {
    res.send("naber")
})

app.listen(5000,() => {
    console.log("Server is running")
})