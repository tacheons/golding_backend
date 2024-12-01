# Golding Backend Application

This is a brief documentation of the Golding Backend application, you can get the detailed pdf documentation of the project from the email i sent as regards to this project.

## Backend Application Setup:
Setup steps;
1.	Make sure that you have node install in the environment you want to run the application, you can download and install the latest stable version of node at this location. `https://nodejs.org/en/download/prebuilt-installer`
2. Database Setup
The application is developed with an Object Relational Mapper (ORM), that can map data entities to any database, by creating a Database Abstraction Layer (DBAL), that auto script SQL that maps to that database.
All you need to set the application up with your database is to do the following:
2.1 Locate the `data-source` file that is located at the `src folder`
2.2 Change the following settings to your database settings
   `type: "mysql",`
   `host: "localhost",`
   `port: 3306,`
   `username: "root",`
   `password: "",`
   `database: "golding_capital",`
3. On your database create a database name that corresponds to the database name `golding_capital` used here. that will be all you need to do, all the database tables will be auto generated, based on the entities in the application.
4.	Run the following command to install the dependencies npm i
5.	Run npm run dev to start up the application 
6.	The application will be available at this url on port `4000`, `http://localhost:4000`

## Backend Architectural Diagram

This is schematics that develop the full blown backend that services all the user request via an API, as a server with multiple endpoint entry, it can service various services or frontends that that integrates with it


![backend](https://github.com/user-attachments/assets/0a8910ea-8638-4d2d-a0c7-67f39da18af1)


## Choice of Tech Stacks:


Base on the requirement analysis, the type of system to be developed, the Domain Driven Design (DDD) and the possible user metric, as regard to level of usage and interaction, the design structure and the tech stack can be determined.
Below is my choice of tech stack base on my analysis and the information I have gotten so far on the application.

## Backend Tech Stack:

I implement the architecture on node.js core framework, with following technologies;

1. Node.js
2. JavaScript or Typescript
3. Express.js
4. TypeORM
5. Relational database like (MYSQL, Postgres, MSSQL, Maria DB, e.t.c) or NoSQL database like mongoDB
6. Morgan
7. Authentication System like JWT
8. Encryption System

Alternative, will be to use Nest.js framework

## Nest.js Framework:

I could implement the architecture on nest.js framework, with following technologies;

1. Node.js
2. Typescript
3. Express.js
4. Relational database like (MYSQL, Postgres, MSSQL, Maria DB, e.t.c) or NoSQL database like mongoDB
5. TypeORM
6. GraphQL

## Other Tech Stacks:

Other technologies that facilitated the development of the solution includes, but restricted to the following;

1. Git
2. Git Repository
3. VsCode IDE
4. Nodemon
5. Morgan Logging tool
6. Cross-Env for environment Switching
7. Postman API Testing
