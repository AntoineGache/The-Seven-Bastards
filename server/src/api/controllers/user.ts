import {NextFunction, Request, Response} from 'express';
import { JWTUtils } from '../../core/utils/JWTUtils';
import { CustomError } from '../utils/custom-error';
import { BCryptUtils } from '../utils/Bcrypt';
import { MySQL } from "../../core/database/MySQL";

export type loginData = {
	identifiant: string,
	password: string
}

export const register = async (req: Request, res: Response, next: NextFunction) => {

	//requête SQL
	// Traitement 

}

export const login = async (req: Request, res: Response, next: NextFunction) => {

	 
	let rows = await MySQL.instance.execute(`select id,password from utilisateur where login= "${req.body.identifiant}" `)
	let dataRows = rows[0] as any[]
	console.log(rows)
	
	if(dataRows.length==1){ // j'ai un utilisateur avec ce login
		
		const pass = rows[0][0].password
		const id=rows[0][0].id
		console.log(id)
		
		if(req.body.mdp == pass){
			
			const reqRole = `SELECT role
FROM (
SELECT 'competiteur' AS role, 1 AS ord
FROM competiteur
WHERE id = ${id}
UNION ALL
SELECT 'president', 2
FROM president
WHERE id = ${id}
UNION ALL
SELECT 'administrateur', 3
FROM administrateur
WHERE id = ${id}
UNION ALL
SELECT 'directeur', 4
FROM directeur
WHERE id = ${id}
UNION ALL
SELECT 'evaluateur', 5
FROM evaluateur
WHERE id = ${id}
UNION ALL
SELECT 'jury', 6
FROM jury
WHERE id = ${id}
UNION ALL
SELECT 'utilisateur', 7
FROM utilisateur
WHERE id = ${id}
) AS roles
								ORDER BY ord`
			rows = await MySQL.instance.execute(reqRole)

			  let str=''
			  dataRows = rows[0] as any[]

			  for(let i=0;i<dataRows.length;i++){
				str+=rows[0][i].role+'/'
			  }

			  console.log(str)
			return res.status(203).json({str})
		}else{
			console.log("pas le bon mot de passe")
			return res.status(202)
		}
	}else{
		console.log("pas d'intentifiant valide")
		return res.status(201)
	}
}

export const logout = async (req: Request, res: Response, next: NextFunction) => {
	res.clearCookie('authToken').status(200).send();
};
