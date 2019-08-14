import * as T from '../types';

const initialstate = {
	isLoading: false,
	quote: [],
	error: null,
	favClicked:false
};

export const qodReducer = (state = initialstate, action) => {
	switch (action.type) {
		case T.GET_QUOTE_INITIATED:
			return {
				...state,
				isLoading: true,
				favClicked:false
			};
		case T.GET_QUOTE_SUCCESS:
			return {
				...state,
				isLoading: false,
				quote: action.payload
			};
		case T.GET_QUOTE_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};
		default:
			return {...state};
	}
};
