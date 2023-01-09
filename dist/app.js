"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const contact_routes_1 = require("./routes/contact.routes");
const database_1 = require("./utils/database");
const swaggiffy_1 = require("swaggiffy");
const PORT = '5000';
const app = (0, express_1.default)();
//database connection
(0, database_1.dbConnection)();
//middlewares
app.use(body_parser_1.default.json());
app.use('/', contact_routes_1.contactRouter);
//home route
app.get('/', (req, res, next) => {
    res.send("Hello World I am from express and runnning using typescript");
});
// swagger
new swaggiffy_1.Swaggiffy().setupExpress(app).swaggiffy();
//server
app.listen(PORT, () => {
    console.log("The server is running");
});
