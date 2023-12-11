import API from "./API";
import {Cookies} from '../Utils/Cookies';

export const signIn = async (credentials) => {
	
	const authToken = Cookies.get('authToken');
	
	if (credentials) {
		return (await API.post('/auth/login', credentials));
	} else {
		if (!authToken) throw new Error('No credentials provided and no authToken found in cookies');
		return (await API.post('/auth/login'));
	}
};

export const signOut = async () => {
	return await API.get('/auth/logout');
};

