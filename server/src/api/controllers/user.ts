import {NextFunction, Request, Response} from 'express';


export const mysql = require('../../app');

export type loginData {
	identifiant: string,
	password: string
}


export const register = async (req: Request, res: Response, next: NextFunction) => {

	//requête SQL
	// Traitement 

}

export const login = async (req: Request, res: Response, next: NextFunction) => {

	//requête SQL
	// Traitement 

}

export const logout = async (req: Request, res: Response, next: NextFunction) => {
	res.clearCookie('authToken').status(200).send();
};

