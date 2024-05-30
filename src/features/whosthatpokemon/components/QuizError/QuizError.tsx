import { Button, Typography } from '@mui/material';

export type QuizErrorType = 'random' | 'verify';

interface QuizErrorProps {
	userGuess: string;
	retryCall: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
	errorType: QuizErrorType;
}

const QuizError = (props: QuizErrorProps) => {
	const { userGuess, retryCall, errorType } = props;
	const errorPrefix = 'ERROR: We are having trouble ';
	return (
		<>
			<Typography className="pokemonError">
				{errorPrefix}
				{errorType === 'random'
					? ' fetching the next pokemon for you to guess, please try again'
					: ' verifying your answer, please try again'}
			</Typography>
			<Button onClick={retryCall} value={userGuess}>
				<Typography variant="button">Retry</Typography>
			</Button>
		</>
	);
};

export default QuizError;
