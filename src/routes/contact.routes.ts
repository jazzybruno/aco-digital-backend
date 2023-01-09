import express, { Router } from 'express';
import { getContacts , postContact } from '../controllers/contact';

export const contactRouter : Router = express.Router()

 contactRouter.get('/contact' ,  (req , res)=>{
        getContacts(req , res)
 })
 contactRouter.post('/contact' , (req , res)=>{
    postContact(req , res)
 })
