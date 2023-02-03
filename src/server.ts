import express = require("express");
import router from "./routes";

import dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3333;
const app = express();

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log("O servidor foi inicializado em http://localhost:" + port);
});
