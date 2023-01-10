import express , {Request , Response , NextFunction} from "express";
import bodyParser from "body-parser";
import { contactRouter } from "./routes/contact.routes";
import { dbConnection } from "./utils/database";
import { Swaggiffy } from 'swaggiffy';

const PORT = '5000'

const app : express.Application = express()

//database connection
dbConnection()

//middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use('/' , contactRouter);


//home route
app.get('/' , (req:Request , res:Response , next:NextFunction)=>{
   res.send("The new Backend application")
})


//server
app.listen(PORT , ()=>{
    console.log("The server is running");
})

// swagger
new Swaggiffy().setupExpress(app).swaggiffy();