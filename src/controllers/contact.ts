import express, { Request , Response } from 'express';
import { ContactModel } from '../models/Contact';

export const postContact :Function = async(req : Request , res : Response) =>{
  const contact = new ContactModel(req.body)
  try {
    contact.save()
    res.send(contact)
  } catch (error) {
    res.status(500).send("Network Error")
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


