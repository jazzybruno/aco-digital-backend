import express, { Router } from 'express';
import { getContacts , postContact } from '../controllers/contact';
import { registerDefinition } from 'swaggiffy';

export const contactRouter : Router = express.Router()

 contactRouter.get('/contact' ,  (req , res)=>{
        getContacts(req , res)
 })
 contactRouter.post('/contact' , (req , res)=>{
    postContact(req , res)
 })

 registerDefinition(contactRouter , {tags: "Contact" , mappedSchema: "ContactModel" , basePath :""})