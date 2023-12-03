
/**
 * These methods allow to manipulate cookies
 * There are 3 methods:
 * set(name: string, value: any, days?: number): create a cookie
 * get(name: string): retrive the cookie
 * erase(name: string): delete the cookie
 */


export namespace Cookies {

	export const set = (name: string, value: any, days?: number) => {
		let expires = '';
		if (days) {
			const date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = `; expires=${date.toUTCString()}`;
		}
		document.cookie = `${name}=${value || ''}${expires}; path=/`;
	};
	
	export const get = (name: string) => {
		const nameEQ = `${name}=`;
		const ca = document.cookie.split(';');
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) === ' ') {
				c = c.substring(1, c.length);
			}
			if (c.indexOf(nameEQ) === 0) {
				return c.substring(nameEQ.length, c.length);
			}
		}
		return null;
	};
	
	export const erase = (name: string) => {
		document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
	};
}