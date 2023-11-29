
import {NextFunction, Request, Response} from 'express';
/*
import {JWTUtils} from '../utils/JWT';

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
	let token = req.headers.authorization?.split(' ')[1];
	
	if (!token) {
		return res.status(401).send({
			success: false,
			message: 'Access denied. No token provided.',
			status: 401,
			additionalInfo: {}
		});
	}
	
	try {
		req.user = JWTUtils.decode(token);
		
		next();
	} catch (err) {
		return res.status(401).send({
			success: false,
			message: 'Access denied. Invalid token.',
			status: 401,
			additionalInfo: err.message
		});
	}
	
};

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
	
	if (!req.user.admin) {
		return res.status(403).send({
			success: false,
			message: 'Access denied. You are not an admin.',
			status: 403,
			additionalInfo: {}
		});
	}
	
	next();
};

export const isUser = (req: Request, res: Response, next: NextFunction) => {
	
	if (req.user.admin) {
		return res.status(403).send({
			success: false,
			message: 'Access denied. You are an admin.',
			status: 403,
			additionalInfo: {}
		});
	}
	
	next();
};
*/