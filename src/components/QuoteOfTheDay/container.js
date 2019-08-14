import React from 'react';
import {connect} from 'react-redux';
import QuoteOfTheDay from './index';
import {getQOD} from '../../appState/actions/qod';
import {addFavourite, getFavourite} from '../../appState/actions/favourite';

const mapState = state => ({
	quote: state.qodReducer,
	favourite: state.favouriteReducer
});

const mapDispatch = {
	getQOD,
	addFavourite,
	getFavourite
};

export default connect(
	mapState,
	mapDispatch
)(QuoteOfTheDay);
