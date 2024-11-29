import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

/**
 * @implementaion
 * MYSQL CONFIGURATION WITH THE ORM
 * This is the Data Source configuration for integration the application
 * to various databases using Object Relational Mapper (ORM)
 * a Database Abstration Layer (DBAL), that enables the application to connection any
 * database.
 *
 *@params {*}
 * configuration options
 * @return configurationobject
 *
 * @author
 * @since
 * v1.0.0
 */
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

/**
 * @implementaion
 * SQLITE CONFIGURATION WITH THE ORM
 * This is the Data Source configuration for integration the application
 * to various databases using Object Relational Mapper (ORM)
 * a Database Abstration Layer (DBAL), that enables the application to connection any
 * database.
 *
 *@params {*}
 * configuration options
 * @return configurationobject
 *
 * @author
 * @since
 * v1.0.0
 */
// export const AppDataSource = new DataSource({
//   type: "sqlite",
//   database: "golding_capital.sql",
//   synchronize: false,
//   logging: false,
//   entities: [__dirname + "/entity/*{.ts,.js}"], //   entities: [User],
//   migrations: [],
//   subscribers: [],
//   // subscribers: ["subscriber/*.js"],
//   // entitySchemas: ["schema/*.json"],
//   // migrations: ["migration/*.js"],
//   cache: {
//     // duration: 30000 // 30 seconds
//     ignoreErrors: true,
//   },
// });
