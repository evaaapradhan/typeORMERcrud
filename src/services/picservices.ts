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