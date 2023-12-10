import {NextFunction, Request, Response} from 'express';
import { MySQL } from "../../core/database/MySQL";

var mysql = require('../../app');

export const recupConcours = async (req: Request, res: Response, next: NextFunction) =>{

    //Requête SQL
    let rows;
	rows = await MySQL.instance.execute('SELECT * FROM concours;')
    return res.status().json(var soit {"rows": rows});

    //Traitement
    
}

export const evaluation = async (req: Request, res: Response, next: NextFunction) =>{

    //Requête SQL
    
    //Traitement
}
