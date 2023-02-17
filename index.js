//1.import all important packages like expressjs, mongoose ,cors.
//2.now configure all of these together
//3.create route

//first step
import express from "express"
import cors from "cors"
import mongoose from "mongoose"

//second step
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.set("strictQuery", false);

mongoose.connect("mongodb+srv://suraj7280:suraj728042@cluster0.asdsicr.mongodb.net/test",{
    useNewUrlParser:true,
},()=>{
    console.log("DB connected")
})  //myLoginRegisterDB is a name of database




//creating schema 
const userSchema = new mongoose.Schema({
    emailorphone:String,
    password:String,
    cpassword:String
})

//crete model
const User = new mongoose.model("User",userSchema)


//Routes
app.post("/login",(req,res)=>{
    const {emailorphone,password} =req.body
    User.findOne({emailorphone:emailorphone},(err,user)=>{  //checking the password match with user pssword or not
        if(user){
             if(password === user.password){
                res.send({message:"Login Successfull",user:user})
            }else{
                res.send({message:"Password not match"})
            } 
        }else{
            res.send({message:"User not registered"})
        }
    })
})


app.post("/register",(req,res)=>{
    
    const {emailorphone,password,cpassword} =req.body //assigning the values that comes from register form
    User.findOne({emailorphone:emailorphone},(err,user)=>{
        if(user){
            res.send({message:"User already registered"}) //checking the  email is alredy registered in database or not
        } else {
            const user = new User({
                emailorphone,
                password,
                cpassword //creating the user
            })
            user.save( err =>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"Successfully Registered"})
                }
            }) // saving the users data and checking the error occurrence
        }
    })
    
})

app.listen(9002,()=>{
    console.log("Be started at port 9002")
})
