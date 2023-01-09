import express , {Request , Response , NextFunction} from "express";
import { contactRouter } from "./routes/contact.routes";
const PORT = '5000'

const app : express.Application = express()

//middlewares
app.use('/' , contactRouter);

//home route
app.get('/' , (req:Request , res:Response , next:NextFunction)=>{
   res.send("Hello World I am from express and runnning using typescript")
})

//server
app.listen(PORT , ()=>{
    console.log("The server is running");
})
