import { Request, Respose, Router } from "express";
import { Blog } from "../entity/Blog";
import { blogpost, delblog, findblog, putblog } from "../services/blogservices";
export const BlogRouter : Router = Router();

BlogRouter.get("/blog", async(req:Request, res:Respose)=>{
    try{
        const result1= await findblog();
        res.send(result1)
    }catch(error){
        res.send("error")
    }
})

BlogRouter.post("/blogpost", async(req:Request, res:Respose)=>{
    try{
        const postblog = await blogpost(req.body);
        res.send(postblog)
    }catch(error){
        res.send("error")
    }
})

BlogRouter.delete("/delblog/:id", async(req:Request, res:Respose)=>{
    try{let deleteid:number = Number(req.params.id)
    const todelete = await delblog (deleteid)
    res.status(200).json({message:`data of id ${deleteid} has been deleted`, data: todelete  })
    }catch(error){
        res.send("error")
    }
})

BlogRouter.put("/updateblog/:id", async(req:Request, res:Respose)=>{
    try{
         let updateid: Number = Number(req.params.id)
         const update = await putblog (updateid, req.body)
         res.status(200).json({message:`data of id ${updateid} has been updated`, data: update})
    }catch(error){
        res.status(404).json('error')
    }
})