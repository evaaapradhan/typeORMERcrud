import {Blog} from "../entity/Blog";

import { AppDataSource } from "../srcdata/data-source";


export const findblog = () =>{
    const blogtable = AppDataSource.manager.find(Blog);
    return Promise.resolve(blogtable);
  };

  export const blogpost = async (blog)=>{
   await AppDataSource.manager.insert(Blog, blog);
    return Promise.resolve(findblog());
  }

export const delblog = async(deleteid)=>{
   const deleteblog = await AppDataSource.manager.findOneByOrFail(Blog,{
         id:deleteid,
   })
   await AppDataSource.manager.remove(deleteblog)
   return findblog();
}

export const putblog = async(putid, updatedid)=>{
    const updateblog = await AppDataSource.manager.update(Blog,{
        id:putid,
    }, updatedid)
    // await AppDataSource.getRepository(Blog).update(putid, updatedid);
    return Promise.resolve(findblog());
}