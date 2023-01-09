import express from "express";
const PORT = '5000'

const app : express.Application = express()
app.get('/' , (req , res)=>{
   res.send("Hello World I am from express and runnning using typescript")
})

app.listen(PORT , ()=>{
    console.log("The server is running");
})
