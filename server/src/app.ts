import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';
import { router } from "./api/routes";
import dotenv from 'dotenv';
import { MySQL } from "./core/database/MySQL";

MySQL.connect().then(_ => console.log('Connected to the MySQL database !')
).catch((err: Error) => console.log(`Error while connecting to the MySQL database : ${err.message}`));

const app = express();
dotenv.config();

app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/", router);

app.listen(process.env.BACK_PORT, () => {
  console.log("server running : http://localhost:8080");
});