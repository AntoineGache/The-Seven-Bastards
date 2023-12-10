import {NextFunction, Request, Response} from 'express';
import { MySQL } from "../../core/database/MySQL";

export const addImage = async (req: Request, res: Response, next: NextFunction) => {


    console.log(req);

    res.status(201).json({"Status": "ok"})

}