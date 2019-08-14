import * as T from '../types';
import {getSearchService} from '../../Service/searchService';

export const getSearchData = data => async dispatch => {
	dispatch({
		type: T.SEARCH_INITIATED
	});

	try {
		const getData = await getSearchService(data);
		dispatch({
			type: T.SEARCH_SUCCESS,
			payload: getData
		});
	} catch (error) {
		dispatch({
			type: T.SEARCH_FAILURE,
			payload: error
		});
	}
};

export const clearSearchData = () => dispatch => {
	dispatch({
		type: T.CLEAR_SEARCH
	});
};
