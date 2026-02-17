import express from "express"

const app = express()

app.get("/",(req,res)=>{
  res.send("hello world")
})

app.listen(3000,()=>{
  console.log("server up htpp://127.0.0.1:3000")
})