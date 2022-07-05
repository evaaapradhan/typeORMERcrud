import {Router, Request, Response} from "express";
import { deletepic, findpic, postpic, updatepic } from "../services/picservices";
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
        res.send('error on post')
    }
})

//DELETE
PictureRouter.delete("/pic/:id", async(req:Request, res:Response)=>{
    
    try{
         let deleteid:number = Number(req.params.id)
         const result = await deletepic(deleteid)
         res.status(200).json({message:`id number ${deleteid} has been deleted`, data: result})
    }catch(error){
        res.send('error on delete')
    }
})

//PUT
PictureRouter.put("/pic/:id", async(req:Request, res:Response)=>{
    let updateid:number = Number(req.params.id)
    try{
         
         const updatedArray = await updatepic(updateid, req.body)
         res.status(200).json({message:`updated info of id number ${updateid}`, data: updatedArray})
    }
    catch(error){
        res.send('error on put')
    }
})