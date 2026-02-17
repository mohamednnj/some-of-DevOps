import express from "express"

const app = express()

app.get("/",(req,res)=>{
  res.send("hello world")
})

app.get("/login",(req,res)=>{
  res.send("login page cookies solved")
})

app.listen(3000,()=>{
  console.log("server up htpp://127.0.0.1:3000")
})