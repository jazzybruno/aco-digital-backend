import express, { Request , Response } from 'express';
import { ContactModel } from '../models/Contact';
import { contactValidation } from '../utils/validation';

export const postContact :Function = async(req : Request , res : Response) =>{
    const {error} = contactValidation(req.body)
    if(error){
     res.status(400).send(error.details[0].message)
    }else{
  const contact = new ContactModel(req.body)
  try {
    contact.save()
    res.status(200).send(contact)
  } catch (error) {
    res.status(500).send("Network Error")
  }
}
}

 export const getContacts : Function = async(req : Request , res : Response) =>{
    try {
        let contacts : (object)[] 
        contacts = await ContactModel.find()
        res.send(contacts)
    } catch (error) {
        res.status(500).send("Network Error")
    }
}


