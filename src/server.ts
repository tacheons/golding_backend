import * as express from "express";
import * as dotenv from "dotenv";
import * as cors from "cors";
import * as morgan from "morgan";
import * as bodyParser from "body-parser";
import { AppDataSource } from "./data-source";
import appRoutes from "./routes/appRoutes";
import serverConfig from "./modules/configurations/serverConfig";
import { corsOptions } from "./modules/configurations/corsOptions";

/**
 * @implementation :
 * This is a Node.js application server, to establish the backend system for the
 * Web application.
 *
 * # Application Server
 * the application server is configured to spinning off a core node.js application,
 * based on express framework Bootstrapping the server integral dependency processes and modules
 *
 * # Configurations
 * Configure the Express Server, to run in both development and production mode
 * Cors Configuration for cross origin request block issues
 * Minimal Configuration and integration of the middleware layer
 * Configuration and integration of the Sqlite Database
 * Switches and monitors the server from development mode to production mode vice verse
 * Integrates the application routes
 * Endpoint for other services
 * e.t.c
 *
 * # Backend Component Parts & Modules
 * Express Server
 * Object Relational Mapper (ORM) Integratio
 * Routing Section & API Endpoints
 * In-Memory Database (Sqlite)
 * Database Seeding Module
 * Server side Web pages
 * email module
 *
 * @returns
 * a healthy running server running on port 777
 *
 * @authors
 * @since
 * v1.0.0
 */

AppDataSource.initialize()
  .then(async () => {
    /**
     * load config file for global environment variables used in the application
     * The database connection string, the server url, authentication details, codes
     * for route protection e.t.c are handled here.
     */
    dotenv.config();

    /**
     * setup express, configure and spins of a node.js native http server
     * and more easy ways of routing through the application and middleware
     * usage for specific functions and further processing of the request and
     * reponses through the application
     */
    const app = express();
    app.use(bodyParser.json());
    // app.use('/static', express.static(path.join(__dirname, 'public')))

    /**
     * configure cors middleware
     */
    app.use(cors(corsOptions));

    /**
     * morgan: http request logger middleware
     */
    if (process.env.NODE_ENV === "development") {
      app.use(morgan("dev"));
    }

    /**
     * application routes setup
     */
    app.use(appRoutes);

    // setup express app here
    // ...

    // start express server
    app.listen(serverConfig.port);

    console.log(
      `Express server has started on port ${serverConfig.port}. url ${serverConfig.url}:${serverConfig.port}`
    );
  })
  .catch((error) => console.log(error));
