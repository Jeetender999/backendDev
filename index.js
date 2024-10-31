require("dotenv").config()
const express = require("express")
const app = express()



app.get("/",(req,res)=>{
    res.send("Home hello page")
    console.log("Welcome to the home page")
})

app.get("/login",(req,res)=>{
    res.send("<h1>Login Page</h1>")
})
app.listen(process.env.PORT, ()=>{
    console.log("Backend started at ", process.env.PORT)
})