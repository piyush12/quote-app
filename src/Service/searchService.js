import {get} from 'axios';
import {API_KEY, API_URL} from '../Constants';

export const getSearchService = data =>
	new Promise((resolve, reject) => {
		let headers = {
			'Content-Type': 'application/json',
			Authorization: `Token token="${API_KEY.toString()}"`
		};
		get(`${API_URL}/quotes/${data}`, {headers: headers})
			.then(result => resolve(result.data.quotes))
			.catch(error => reject(error));
	});
