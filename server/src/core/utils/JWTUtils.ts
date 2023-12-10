import * as jwt from 'jsonwebtoken';

export namespace JWTUtils {
	
	export const generateToken = (data: any, expires: any) => {
		return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, expires);
	};
	
	export const decode = (token: string) => {
		return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
	};
}