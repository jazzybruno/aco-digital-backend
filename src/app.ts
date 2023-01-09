import express , {Request , Response , NextFunction} from "express";
const PORT = '5000'

const app : express.Application = express()
app.get('/' , (req:Request , res:Response , next:NextFunction)=>{
   res.send("Hello World I am from express and runnning using typescript")
})

app.listen(PORT , ()=>{
    console.log("The server is running");
})
