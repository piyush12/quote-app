import * as T from '../types';
import {getQuoteOfDay} from '../../Service/qodService';

export const getQOD = () => async dispatch => {
	dispatch({
		type: T.GET_QUOTE_INITIATED
	});
	try {
		const quote = await getQuoteOfDay();
		dispatch({
			type: T.GET_QUOTE_SUCCESS,
			payload: quote
		});
	} catch (err) {
		dispatch({
			type: T.GET_QUOTE_FAILURE,
			payload: err
		});
	}
};
