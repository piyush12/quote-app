import * as T from '../types';

const initialState = {
	isLoading: false,
	searchData: null,
	error: null
};

export const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case T.SEARCH_INITIATED:
			return {
				...state,
				isLoading: true
			};
		case T.SEARCH_SUCCESS:
			return {
				...state,
				isLoading: false,
				searchData: action.payload
			};
		case T.SEARCH_FAILURE:
			return {
				...state,
				isLoading: false,
				searchData: [],
				error: action.payload
			};
		case T.CLEAR_SEARCH:
			return {
				...state,
				searchData: []
			};
		default:
			return {...state};
	}
};
