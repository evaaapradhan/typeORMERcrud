import { User } from '../entity/User';
import { AppDataSource } from '../srcdata/data-source';

export const findAll = () => {
    const usertable = AppDataSource.manager.find(User);
    return Promise.resolve(usertable);
  };

   //GETBYID
  export const findByID = async(getid: number) => {
    // const findget = AppDataSource.getRepository(User)
    const finduser = await AppDataSource.getRepository(User).findOneBy({
      id: getid,
    })
    return Promise.resolve(finduser)
  };

//POST
export const upost = async(item:User) => {
  // const usern = AppDataSource.manager.create(data)
  //  await AppDataSource.manager.save(User); //when using save have to declare 
  await AppDataSource.manager.insert(User,item) 
   //--> existing entity , new data
  return Promise.resolve(findAll());
  };
 
  //Delete
  export const deletedata = async (deleteid: number)=>{
    const findobject = await AppDataSource.getRepository(User).findOneBy({
      id: deleteid,
    })
    if (findobject)
await AppDataSource.getRepository(User).remove(findobject)
return Promise.resolve(findAll())
  }

  //update
  export const update = async(updateid:number, u:User) => {
    const Updateuser = await AppDataSource.getRepository(User).findOneBy({
      id: updateid,
    })
    // console.log(Updateuser)
    await AppDataSource.getRepository(User).update(updateid, u)  //--> updateid ko data maa update by u ko data 
    return Promise.resolve(findAll())
    // if (Updateuser)
    // {
    //   Updateuser.firstName=u.firstName,
    //   Updateuser.lastName = u.lastName,
    //   Updateuser.age = u.age
    // }
    // await AppDataSource.getRepository(User).save(Updateuser)
  }

