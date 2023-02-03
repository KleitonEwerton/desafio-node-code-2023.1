import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv = require("dotenv");
dotenv.config();


export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || "desafio-node",
  synchronize: true,
  logging: false,
  entities: [`${__dirname}/**/entity/*.{ts,js}`],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
  subscribers: [],
});
