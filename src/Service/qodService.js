import {API_URL} from '../Constants';
import {get} from 'axios';

export const getQuoteOfDay = () =>
	new Promise((resolve, reject) => {
		get(`${API_URL}/qotd`)
			.then(result => resolve(result.data.quote))
			.catch(error => reject(error));
	});
