import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../appState/reducers';

const initialstate = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialstate,
  applyMiddleware(...middleware)
)

export default store;