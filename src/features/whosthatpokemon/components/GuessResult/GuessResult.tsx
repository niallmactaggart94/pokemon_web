import { Button, Typography } from '@mui/material';
import { VerifiedPokemonResponse } from 'features/whosthatpokemon/services/pokemon';
import { MAX_ROUNDS } from '../PokemonQuiz/PokemonQuiz';

interface GuessResultProps {
	verifiedAnswer: VerifiedPokemonResponse;
	currentRound: number;
	nextRound: () => void;
	gameOver: () => void;
}

const GuessResult = (props: GuessResultProps) => {
	const { verifiedAnswer, nextRound, currentRound, gameOver } = props;
	const finalRound = currentRound >= MAX_ROUNDS;

	return (
		<>
			<Typography variant="h3">
				{verifiedAnswer.isCorrect
					? `Correct! The answer was ${verifiedAnswer.name}`
					: `Unlucky! The correct answer was ${verifiedAnswer.name}`}
			</Typography>
			<Button onClick={finalRound ? gameOver : nextRound}>
				<Typography variant="button">{finalRound ? 'Finish' : 'Next'}</Typography>
			</Button>
		</>
	);
};

export default GuessResult;
