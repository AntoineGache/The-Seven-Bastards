import {NextFunction, Request, Response} from 'express';
import { JWTUtils } from '../../core/utils/JWTUtils';
import { CustomError } from '../utils/custom-error';
import { BCryptUtils } from '../utils/Bcrypt';
import { MySQL } from "../../core/database/MySQL";

export type nvConcoursData = {
	theme: string,
	description: string,
    dateDebut: Date,
    dateFin: Date,
    etat: string,
    president: number
}

export const nvConcours = async (req: Request, res: Response, next: NextFunction) => {

	console.log(req.body)
   
    const requete = `INSERT INTO concours (theme, description, date_debut, date_fin, etat, president) 
    VALUES('${req.body.theme}','${req.body.description}','${req.body.dateDebut}','${req.body.dateFin}','${req.body.etat}',${req.body.president}); `
    console.log(requete)
    try{
        let rows = await MySQL.instance.execute(requete)
        console.log(rows)
        console.log("eeee")
        return res.status(200)
    }catch(error){
        return res.status(201)
    }
}