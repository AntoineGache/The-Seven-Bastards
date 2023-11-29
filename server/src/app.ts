import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';
import { router } from "./api/routes";
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/", router);

// Here database connexion !!!
const mysql = require('mysql2');

try {
    const connection = mysql.createConnection({
        host: `${process.env.MYSQL_HOST}`,
        user: `${process.env.MYSQL_USER}`,
        password: `${process.env.MYSQL_PASSWORD}`,
        database: `${process.env.MYSQL_DATABASE}`,
        port: `${process.env.MYSQL_PORT}`
      })
    
      console.log("Data base: Connexion Success !")

      app.listen(process.env.BACK_PORT, () => {
        console.log("server running : http://localhost:8080");
      });
} catch(err) {
    console.log("Data base: Connexion Error !")
    console.log(err)
}