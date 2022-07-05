import { Pictures } from "../entity/pictures";
import { User } from "../entity/User";
import { AppDataSource } from "../srcdata/data-source";

const repositoryuser = AppDataSource.getRepository(User);
const repositorypic = AppDataSource.getRepository(Pictures);

export const findpic=()=>{
    const pictable = repositorypic.find();
    return (pictable);
}

export const postpic = async(item: Pictures)=>{
     await repositorypic.save(item)
     return Promise.resolve(findpic());
}

export const deletepic = async(deleteid)=>{
    const deletepic = await repositorypic.findOneByOrFail({
        id:deleteid,
    })
    await repositorypic.remove(deletepic)
    return Promise.resolve(findpic())
}

export const updatepic = async(updateid, picinfo:Pictures) => {
   const updatepic = await repositorypic.findOneByOrFail({
        id:updateid,
    })
    await repositorypic.update(updateid, picinfo)
    return Promise.resolve(findpic())
}