import firebase from '../firebase';

export const addFavouriteService = data => {
	return firebase
		.database()
		.ref('favorite_quotes')
		.push(data);
};

export const getFavouritesService = () =>
	new Promise((resolve, reject) => {
		firebase
			.database()
			.ref('favorite_quotes')
			.once('value')
			.then(data => resolve(data.toJSON()))
			.catch(err => reject(err));
	});

export const deleteFavouriteService = id =>
	new Promise((resolve, reject) => {
		return firebase
			.database()
			.ref(`favorite_quotes/${id}`)
			.remove()
			.then(() => resolve("Deleted Successfully"))
			.catch(error => reject(error));
	});

