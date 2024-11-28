import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "golding_capital",
  synchronize: true,
  logging: false,
  entities: [__dirname + "/entity/*{.ts,.js}"], //   entities: [User],
  migrations: [],
  subscribers: [],
  // subscribers: ["subscriber/*.js"],
  // entitySchemas: ["schema/*.json"],
  // migrations: ["migration/*.js"],
  cache: {
    // duration: 30000 // 30 seconds
    ignoreErrors: true,
  },
});
