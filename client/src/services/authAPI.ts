import API from "./API";
import {Cookies} from '../Utils/Cookies';

export type SignInCredentials = {
	identifiant: string,
	password: string
}

export namespace AuthAPI {

    export const signIn = async (credentials: SignInCredentials | null = null): Promise<string> => {
		
		const authToken = Cookies.get('authToken');
		
		if (credentials) {
			return (await API.post('/auth/login', credentials))?.data?.token as string;
		} else {
			if (!authToken) throw new Error('No credentials provided and no authToken found in cookies');
			return (await API.post('/auth/login'))?.data?.token as string;
		}
	};
	
	export const signOut = async () => {
		return await API.get('/auth/logout');
	};
}

