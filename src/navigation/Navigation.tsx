import * as React from 'react';
import { Router, Switch } from 'react-router-dom';
import RoutePaths from 'navigation/routePaths';
import { LinearProgress } from '@mui/material';
import history from 'navigation/history';
import RouteWithLayout from './RouteWithLayout';
import Layout from 'features/home/containers/Layout';
import WhosThatPokemon from 'features/whosthatpokemon/screens/WhosThatPokemon';
import RouteNotFound from 'features/whosthatpokemon/screens/RouteNotFound';
import Home from 'features/whosthatpokemon/screens/Home';

const Navigation = () => {
	return (
		<React.Suspense fallback={<LinearProgress />}>
			<Router history={history}>
				<Switch>
					<RouteWithLayout path={RoutePaths.Home} layout={Layout} component={Home} exact />
					<RouteWithLayout path={RoutePaths.Play} layout={Layout} component={WhosThatPokemon} exact />
					<RouteWithLayout path="*" layout={Layout} component={RouteNotFound} exact />
				</Switch>
			</Router>
		</React.Suspense>
	);
};

export default Navigation;
