import * as T from '../types';

const initialState = {
	isLoading: false,
	error: null,
	favouriteData: null,
	allFavourite: [],
	favClicked: false,
	isDeleted:""
};

export const favouriteReducer = (state = initialState, action) => {
	switch (action.type) {
		case T.ADD_FAVOURITE_INITIATED:
			return {
				...state,
				isLoading: true,
				favClicked: true
			};
		case T.ADD_FAVOURITE_SUCCESS:
			return {
				...state,
				isLoading: false,
				favouriteData: action.payload
			};
		case T.ADD_FAVOURITE_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};
		case T.GET_FAVOURITE_INITIATED:
			return {
				...state,
				isLoading: true
			};
		case T.GET_FAVOURITE_SUCCESS:
			return {
				...state,
				isLoading: false,
				allFavourite: [action.payload],
				isDeleted:""
			};
		case T.GET_FAVOURITE_FAILURE:
			return {
				...state,
				isLoading: false,
				favouriteData: action.payload
			};
		case T.DELETE_FAVOURITE_INITIATED:
			return {
				...state,
				isLoading: true,
			}
		case T.DELETE_FAVOURITE_SUCCESS:
			return{
				...state,
				isLoading:false,
				isDeleted:action.payload
			}
		case T.DELETE_FAVOURITE_FAILURE:
			return {
				...state,
				isLoading:false,
				isDeleted:action.payload
			}
		default:
			return {...state};
	}
};
