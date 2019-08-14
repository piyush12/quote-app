import * as T from '../types';
import {
	addFavouriteService,
	getFavouritesService,
	deleteFavouriteService
} from '../../Service/favouriteService';

// ADD FAVOURITE DATA
export const addFavourite = data => async dispatch => {
	dispatch({
		type: T.ADD_FAVOURITE_INITIATED
	});

	try {
		const saveData = await addFavouriteService(data);
		dispatch({
			type: T.ADD_FAVOURITE_SUCCESS,
			payload: saveData
		});
	} catch (err) {
		dispatch({
			type: T.ADD_FAVOURITE_FAILURE,
			payload: err
		});
	}
};

// GET FAVOURITE DATA
export const getFavourite = () => async dispatch => {
	dispatch({
		type: T.GET_FAVOURITE_INITIATED
	});

	try {
		const getData = await getFavouritesService();
		dispatch({
			type: T.GET_FAVOURITE_SUCCESS,
			payload: getData
		});
	} catch (err) {
		dispatch({
			type: T.GET_FAVOURITE_FAILURE,
			payload: err
		});
	}
};

export const deleteFavourite = id => async dispatch => {
	dispatch({
		type: T.DELETE_FAVOURITE_INITIATED
	});

	try {
		const deleteData = await deleteFavouriteService(id);
		dispatch({
			type: T.DELETE_FAVOURITE_SUCCESS,
			payload: deleteData
		});
	} catch (err) {
		dispatch({
			type: T.DELETE_FAVOURITE_FAILURE,
			payload: err
		});
	}
};
