import { Box, Typography } from '@mui/material';
import { useRandomPokemonQuery } from 'features/whosthatpokemon/hooks/useRandomPokemonQuery';
import { VerifiedPokemonResponse, verifyPokemon } from 'features/whosthatpokemon/services/pokemon';
import { useEffect, useState } from 'react';
import PokemonImage from '../PokemonImage/PokemonImage';
import PokemonOptions from '../PokemonOptions/PokemonOptions';
import GuessResult from '../GuessResult/GuessResult';
import {
	GameState,
	clearGameStateFromStorage,
	getGameStateFromStorage,
	saveGameStateInStorage
} from 'domain/game/gameManager';
import GameOver from '../GameOver/GameOver';
import Spinner from 'common/components/Spinner/Spinner';

export const MAX_ROUNDS = 3;
export const CORRECT_ANSWER_POINTS = 10;

const PokemonQuiz = () => {
	const [gameState, setGameState] = useState<GameState>(getGameStateFromStorage());
	const [userRound, setUserRound] = useState<number>(gameState?.currentRound ?? 1);
	const [userScore, setUserScore] = useState<number>(gameState?.currentScore ?? 0);
	const [isVerifyingAnswer, setIsVerifyingAnswer] = useState<boolean>(false);
	const [verifiedAnswer, setVerifiedAnswer] = useState<VerifiedPokemonResponse | null>(null);
	const [isVerifyError, setIsVerifyError] = useState<boolean>(false);
	const [isGameOver, setIsGameOver] = useState<boolean>(false);

	const {
		randomPokemon,
		isLoading: isFetchingRandomPokemon,
		isError: isRandomPokemonError
	} = useRandomPokemonQuery(userRound, gameState);

	const nextRound = () => {
		setVerifiedAnswer(null);
		setUserRound(userRound + 1);
	};

	const gameOver = () => {
		clearGameStateFromStorage();
		setIsGameOver(true);
	};

	const reset = () => {
		clearGameStateFromStorage();
		setUserRound(1);
		setUserScore(0);
		setVerifiedAnswer(null);
	};

	useEffect(() => {
		if (gameState?.isFinished) gameOver();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (randomPokemon?.correctId) {
			const updatedGameState: GameState = gameState
				? {
						...gameState,
						roundHistory: gameState.roundHistory
							? { ...gameState.roundHistory, [`round_${userRound}`]: randomPokemon }
							: { [`round_${userRound}`]: randomPokemon }
				  }
				: {
						roundHistory: { [`round_${userRound}`]: randomPokemon },
						currentRound: userRound ?? 1,
						currentScore: userScore ?? 0,
						isFinished: false
				  };

			saveGameStateInStorage(updatedGameState);
			setGameState(updatedGameState);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [randomPokemon?.correctId]);

	const handleUserGuess = async (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!randomPokemon) return;
		const userGuess = e.currentTarget.value;
		try {
			setIsVerifyingAnswer(true);
			const response = await verifyPokemon(randomPokemon.correctId, userGuess);
			if (!response) throw new Error('No response recorded');
			setVerifiedAnswer(response);
			const updatedScore = response.isCorrect ? userScore + CORRECT_ANSWER_POINTS : userScore;
			if (response.isCorrect) setUserScore(updatedScore);

			const updatedGameState = {
				currentRound: userRound >= MAX_ROUNDS ? userRound : userRound + 1,
				currentScore: updatedScore,
				roundHistory: gameState.roundHistory,
				isFinished: userRound >= MAX_ROUNDS
			};

			saveGameStateInStorage(updatedGameState);
			setGameState(updatedGameState);
		} catch (err) {
			console.error(err);
			setIsVerifyError(true);
		} finally {
			setTimeout(() => setIsVerifyingAnswer(false), 1000);
		}
	};

	const isLoading = isVerifyingAnswer || isFetchingRandomPokemon;
	const isError = isRandomPokemonError || isVerifyError;

	return (
		<>
			{isLoading && <Spinner className="pokemonLoader" />}
			{isError && <Typography>Error</Typography>}
			{!isLoading && !isError && (
				<Box
					className="pokemonQuiz"
					sx={{
						maxWidth: { lg: '50%' },
						padding: { xs: '20px', lg: '40px' },
						marginTop: { xs: '20px', lg: '40px' }
					}}
				>
					{randomPokemon && !isGameOver && (
						<>
							<Typography>{`Round ${userRound}/${MAX_ROUNDS}`}</Typography>
							<Typography className="pokemonQuiz__userScore">User Score: {userScore}</Typography>
							<Box className="pokemonQuiz__quizWrapper">
								<PokemonImage
									imageUrl={randomPokemon.correctImageUrl}
									showImage={!!verifiedAnswer}
									id={randomPokemon.correctId}
								/>

								{!verifiedAnswer ? (
									<PokemonOptions handleUserGuess={handleUserGuess} randomPokemon={randomPokemon} />
								) : (
									<GuessResult
										verifiedAnswer={verifiedAnswer}
										currentRound={userRound}
										nextRound={nextRound}
										gameOver={gameOver}
									/>
								)}
							</Box>
						</>
					)}
					{isGameOver && <GameOver userScore={userScore} reset={reset} />}
				</Box>
			)}
		</>
	);
};

export default PokemonQuiz;
