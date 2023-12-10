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

	let rows = await MySQL.instance.execute(`select id from utilisateur where login= "${req.body.identifiant}" `)
	let dataRows = rows[0] as any[]

	return res.json({'test': req.body}).status(201)

	if(dataRows.length==1){ // j'ai un utilisateur avec ce login

		rows = await MySQL.instance.execute(`select password from utilisateur where login= "${req.body.identifiant}" `)

		if(req.body.mdp == rows[0][0].password){
			
			rows = await MySQL.instance.execute(`select id from utilisateur where login= "${req.body.identifiant}" `)
			const id = rows[0][0].id
			
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
			
			// interface pour vérifier les données
			interface UserRole {
				role: string;
			  }

			// JSON converti en tableau
			  const userRolesArray: UserRole[] = Object.entries(rows[0][0]).map(([role, value]) => ({
				role,
				value,  
			  }));
			  
			  // JSON à transformer
			  const originalRolesJSON: { [key: string]: boolean } = {
				utilisateur: false,
				competiteur: false,
				president: false,
				administrateur: false,
				evaluateur: false,
				directeur: false,
			  };
			  
			  // Nouveau JSON avec les valeurs mises à jour
			  const newRolesJSON: { [key: string]: boolean } = { ...originalRolesJSON };
			  
			  // Parcourir le tableau usersRoles et mettre à true les rôles correspondants dans le nouvel objet newRolesJSON
			  userRolesArray.forEach((userRole) => {
				if (newRolesJSON.hasOwnProperty(userRole.role)) {
				  newRolesJSON[userRole.role] = true;
				}
			  });
			
			console.log(newRolesJSON);

			return res.json(newRolesJSON).status(201)
		}else{
			return res.status(203)
		}
	}else{
		return res.status(200)
	}
}

export const logout = async (req: Request, res: Response, next: NextFunction) => {
	res.clearCookie('authToken').status(200).send();
};

