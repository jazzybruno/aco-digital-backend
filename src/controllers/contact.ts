import express, { Request , Response } from 'express';

export const postContact :Function = (req : Request , res : Response) : void =>{
  res.send("The request is here")
}

 export const getContacts : Function = (req : Request , res : Response) =>{
    res.send("The request is here")
}


