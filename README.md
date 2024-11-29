# Golding Backend Application

## Steps to run this project:

1. clone the repository here `https://github.com/tacheons/golding_backend.git`
2. Run `npm i` command
3. Run `npm run dev` command

## Database Setup

The application is developed with an Object Relational Mapper (ORM), that can map data entities to any database, by creating a Database Abstraction Layer (DBAL), that auto script SQL that maps to that database.
All you need to set the application up with your database is to do the following:

1. Locate the `data-source` file that is located at the `src folder`
2. Change the following settings to your database settings
   `type: "mysql",`
   `host: "localhost",`
   `port: 3306,`
   `username: "root",`
   `password: "",`
   `database: "golding_capital",`
3. On your database create a database name that corresponds to the database name used here. that will be all you need to do, all the database tables will be auto generated, based on the entities in the application.
