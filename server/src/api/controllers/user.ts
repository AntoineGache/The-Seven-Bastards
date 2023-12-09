import {NextFunction, Request, Response} from 'express';
import { JWTUtils } from '../../core/utils/JWTUtils';
import { CustomError } from '../utils/custom-error';
import { BCryptUtils } from '../utils/Bcrypt';

export const mysql = require('../../app');

export type loginData = {
	identifiant: string,
	password: string
}


export const register = async (req: Request, res: Response, next: NextFunction) => {

	//requête SQL
	// Traitement 

}

export const login = async (req: Request, res: Response, next: NextFunction) => {

	console.log(req.body)

	/*
	let token: string
	//let token :string = req.header.authorization?.split(' ')[1];

	let user = null

	try {

		if(token) {
			const decoded = JWTUtils.decode(token);
			const identifiant = decoded['identifiant'];

			user = 0 //requête SQL avec identiifant dans la requête
			
			if(!user) {
				next(new CustomError('User not found', 404));
			}

		}
		else {
			//Cas ou il n'y a pas de cookie
			
			//refaire une requête sql

			//Utiliser Bcrypt pour comparer le password

		}

		if(user) {
			const dataAccessToken = {
				"identifiant": user, //Modif pour ajouter l'identifiant du user user.identifiant un truc du genre
				"roles": user
			}

			const authToken = JWTUtils.generateToken(dataAccessToken, {expiresIn: '7d'});
			
			res.status(201).json({authToken})
		}
	} catch (error) {
		next(error)
	}

	*/
	//requête SQL
	// Traitement 

}

export const logout = async (req: Request, res: Response, next: NextFunction) => {
	res.clearCookie('authToken').status(200).send();
};

