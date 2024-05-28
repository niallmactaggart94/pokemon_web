import { Typography } from '@mui/material';
import { CORRECT_ANSWER_POINTS, MAX_ROUNDS } from '../PokemonQuiz/PokemonQuiz';
import { goHome } from 'utils';
import history from 'navigation/history';
import ActionableButtonGrid, { UserActions } from 'common/components/ActionableButtonGrid/ActionableButtonGrid';

interface GameOverProps {
	userScore: number;
	reset: () => void;
}

const GameOver = (props: GameOverProps) => {
	const { userScore } = props;
	const maxScore = MAX_ROUNDS * CORRECT_ANSWER_POINTS;
	const percentage = Math.round((userScore / maxScore) * 100);
	const messageStart = percentage < 50 ? 'Unlucky!' : 'Well Done!';

	const playAgain = () => {
		history.go(0);
	};

	const userActions: UserActions[] = [
		{ id: 'playAgain', action: playAgain, text: 'Play again?' },
		{ id: 'goHome', action: goHome, text: 'Home' }
	];

	return (
		<>
			<Typography variant="h3">
				{messageStart} You scored {userScore}/{maxScore}!
			</Typography>
			<ActionableButtonGrid userActions={userActions} />
		</>
	);
};

export default GameOver;
