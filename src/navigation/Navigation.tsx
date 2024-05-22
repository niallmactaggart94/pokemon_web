import * as React from 'react';
import { Router, Switch } from 'react-router-dom';
import RoutePaths from 'navigation/routePaths';
import { LinearProgress } from '@mui/material';
import history from 'navigation/history';
import RouteWithLayout from './RouteWithLayout';
import Home from 'features/home/containers/Home';
import WhosThatPokemon from 'features/whosthatpokemon/screens/WhosThatPokemon';

const Navigation = () => {
	return (
		<React.Suspense fallback={<LinearProgress />}>
			<Router history={history}>
				<Switch>
					<RouteWithLayout path={RoutePaths.Home} layout={Home} component={WhosThatPokemon} />
				</Switch>
			</Router>
		</React.Suspense>
	);
};

export default Navigation;
