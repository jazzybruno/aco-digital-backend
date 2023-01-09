import * as mongoose from 'mongoose';

export const dbConnection : Function = ()=>{
    mongoose.connect('mongodb://localhost:27017/contacts',  ()=>{
     console.log(" connected to the database");
})
}
