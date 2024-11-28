import * as express from "express";
import * as bodyParser from "body-parser";
import { AppDataSource } from "./data-source";
import appRoutes from "./routes/appRoutes";
import serverConfig from "./modules/configurations/serverConfig";

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();
    app.use(bodyParser.json());
    // app.use('/static', express.static(path.join(__dirname, 'public')))

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
