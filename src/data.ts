import "reflect-metadata";
import { DataSource } from "typeorm";

const dotenv = require("dotenv");
dotenv.config();

const port =  parseInt(process.env.DB_PORT) || 5432;
const type = (process.env.DB_TYPE as "postgres" ) || "postgres";
const host = process.env.DB_HOST || "localhost";
const username = process.env.DB_USER || "postgres";
const password = process.env.DB_PASSWORD || "postgres";
const database = process.env.DB_NAME || "desafio-node";

export const AppDataSource = new DataSource({
  type: type,
  host: host,
  port: port,
  username: username,
  password: password,
  database: database,
  synchronize: true,
  logging: false,
  entities: [`${__dirname}/**/entities/*.{ts,js}`],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
  subscribers: [],
});
