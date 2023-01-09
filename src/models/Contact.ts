import * as mongoose from 'mongoose'
import { Contact } from '../interfaces/contat'
import { registerSchema } from 'swaggiffy'

const Schema  = mongoose.Schema

const contactSchema = new Schema({
    name : {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    website : {
        type: String,
        required: true
    },
    message : {
        type: String,
        required: true
    }

})

export const ContactModel = mongoose.model<Contact & mongoose.Document>('Contact', contactSchema)
registerSchema("ContactModel" , contactSchema , {orm : 'mongoose'})