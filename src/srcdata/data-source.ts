import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entity/User";
import { Blog } from "../entity/Blog";
import * as dotenv from "dotenv";
import { Pictures } from "../entity/pictures";
dotenv.config();
const PW = process.env.password;
const name = process.env.user;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: name,
  password: PW,
  database: "test",
  synchronize: true,
  logging: false,
  entities: [User, Blog, Pictures],
  migrations: [],
  subscribers: [],
});
AppDataSource.initialize()
  .then(() => console.log("connected to db"))
  .catch((error) => console.log("error"));
