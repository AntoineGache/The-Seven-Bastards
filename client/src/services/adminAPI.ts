import API from "./API";
import {Cookies} from '../Utils/Cookies';

export type NewFormsCredentials = {
	theme: string,
	description: string,
    dateDebut: Date,
    dateFin: Date,
    etat: string,
    president: number
}

export const nvConcours = async (credentials: NewFormsCredentials | null = null): Promise<string> => {
	
	const authToken = Cookies.get('authToken');
	
	if (credentials) {
		return (await API.post('/admin/nvConcours', credentials));
	} else {
		if (!authToken) throw new Error('No credentials provided and no authToken found in cookies');
		return (await API.post('/admin/nvConcours'));
	}
};