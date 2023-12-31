import { NextFunction, Request, Response } from "express";
import { MySQL } from "../../core/database/MySQL";

var mysql = require("../../app");

export const afficherConcours = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //Requête SQL
  let cyprien = await MySQL.instance.execute("SELECT * FROM concours;");
  let trans = cyprien[0] as any[];
  return res.json(trans);
};
