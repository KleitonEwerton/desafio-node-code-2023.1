import express = require("express");
import routes from "./routes";
import { AppDataSource } from "./data";

import dotenv = require("dotenv");
dotenv.config();

const port = parseInt(process.env.PORT) || 3333;
const host = process.env.HOST || "localhost";

AppDataSource.initialize()
  .then(async () => {
   
    const app = express();
    
    app.use(express.json());
    app.use(routes);

    app.listen(port, () => {
      console.log("Server started in http://" + host + ":" + port);
    });
  })
  .catch((error) => console.log("Check data-base config into .env or src/data.ts\n\n"+error));
