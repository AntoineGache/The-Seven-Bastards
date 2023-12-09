import * as bcrypt from 'bcryptjs';

export namespace BCryptUtils {
	
	export const SALT_ROUNDS = 10;
	
	export const hashPassword = (password: string): Promise<string> => bcrypt.hash(password, SALT_ROUNDS);
	
	export const comparePassword = (password: string, hash: string): Promise<boolean> => bcrypt.compare(password, hash);
	
	export const isAlreadySalted = (text: string): boolean => /^\$2[ayb]\$.{56}$/i.test(text);
	
	export const generateRandomPassword = (length: number = 10): string => {
		const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		let pass = '';
		for (let x = 0; x < length; x++) {
			const i = Math.floor(Math.random() * chars.length);
			pass += chars.charAt(i);
		}
		return pass;
	};
	
}