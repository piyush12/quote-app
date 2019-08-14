import * as firebase from 'firebase';


var firebaseConfig = {
	apiKey: 'AIzaSyDK0UAHb6obnfz05txfaCpxBDksUDU-cdE',
	authDomain: 'quote-app-4c424.firebaseapp.com',
	databaseURL: 'https://quote-app-4c424.firebaseio.com',
	projectId: 'quote-app-4c424',
	storageBucket: 'quote-app-4c424.appspot.com',
	messagingSenderId: '989773062278'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
