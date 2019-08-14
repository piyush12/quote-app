import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import AppRoute from './Routes';
import 'antd/dist/antd.css';

ReactDOM.hydrate(
	<Provider store={store}>
		<AppRoute>
			<App />
		</AppRoute>
	</Provider>,

	document.getElementById('root')
);
