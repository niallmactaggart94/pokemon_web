import { Box, Typography } from '@mui/material';
import ActionableButtonGrid, { UserActions } from 'common/components/ActionableButtonGrid/ActionableButtonGrid';
import { clearGameStateFromStorage, getGameStateFromStorage } from 'domain/game/gameManager';
import history from 'navigation/history';
import RoutePaths from 'navigation/routePaths';
import pikachuLogo from 'static/images/pikachu.png';

const Home = () => {
	const gameState = getGameStateFromStorage();
	const gameExists = !!gameState;

	const playGame = (continueGame = false) => {
		if (gameExists && !continueGame) clearGameStateFromStorage();
		history.push(RoutePaths.Play);
	};

	const userActions: UserActions[] = [{ id: 'newGame', action: () => playGame(), text: 'New Game' }];
	if (gameExists) userActions.push({ id: 'continueGame', action: () => playGame(true), text: 'Continue Game' });

	return (
		<Box className="wtpHome">
			<Box className="wtpHome__wrapper" sx={{ maxWidth: { lg: '50%' } }}>
				<Typography variant="h1">Who&#39;s that pokemon?</Typography>
				<img src={pikachuLogo} className="wtpHome__pikachuLogo" alt="pikachu" />
				<ActionableButtonGrid userActions={userActions} />
			</Box>
		</Box>
	);
};

export default Home;
