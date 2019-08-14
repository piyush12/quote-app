import {combineReducers} from 'redux';
import {qodReducer} from './qodReducer';
import {favouriteReducer} from './favouriteReducer';
import {searchReducer} from './searchReducer';

export default combineReducers({
	qodReducer,
	favouriteReducer,
	searchReducer
});
