import {Router, Request, Response} from "express";
import { findpic, postpic } from "../services/picservices";
export const PictureRouter: Router = Router();

PictureRouter.get("/pic", async(req:Request, res:Response)=>{
    try{
       const result = await findpic();
       res.status(200).json({message:'get data success', data: result})
    }
    catch(error){
         res.status(404).send('error')
    }
})

//post
PictureRouter.post("/pic", async(req:Request, res:Response)=>{
    try{
        const result = await postpic(req.body)
        res.status(200).json({message: 'data post successful', data:result})
    }catch(error){
        res.send(error)
    }
})

//DELETE