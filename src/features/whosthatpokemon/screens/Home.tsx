import ActionableButtonGrid, { UserActions } from 'common/components/ActionableButtonGrid/ActionableButtonGrid';
import { clearGameStateFromStorage, getGameStateFromStorage } from 'domain/game/gameManager';
import history from 'navigation/history';
import RoutePaths from 'navigation/routePaths';

const Home = () => {
	const gameState = getGameStateFromStorage();
	const gameExists = !!gameState;

	const playGame = (continueGame = false) => {
		console.log(continueGame, gameExists);
		if (gameExists && !continueGame) clearGameStateFromStorage();
		history.push(RoutePaths.Play);
	};

	const userActions: UserActions[] = [{ id: 'newGame', action: () => playGame(), text: 'New Game' }];
	if (gameExists) userActions.push({ id: 'continueGame', action: () => playGame(true), text: 'Continue Game' });

	return (
		<>
			<ActionableButtonGrid userActions={userActions} />
		</>
	);
};

export default Home;
