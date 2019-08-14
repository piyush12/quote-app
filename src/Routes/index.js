import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App from '../App';
import QuoteOfTheDay from '../components/QuoteOfTheDay/container';
import SearchQuote from '../components/SearchQuote';
import Favourite from '../components/Favourite';
import Navigation from '../components/Navigation';

const AppRoute = () => (
	<Router>
		<Navigation />
		<Switch>
			<Route exact={true} path="/" component={App} />
			<Route path="/qod" component={QuoteOfTheDay} />
			<Route path="/search" component={SearchQuote} />
			<Route path="/favourite" component={Favourite} />
		</Switch>
	</Router>
);

export default AppRoute;
