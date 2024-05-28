import { QueryCacheKey } from 'common/constants/Common';
import { useQuery } from 'react-query';
import { RandomPokemonReponse, fetchRandomPokemon } from '../services/pokemon';
import { GameState } from 'domain/game/gameManager';

interface UseRandomPokemonQuery {
	randomPokemon?: RandomPokemonReponse | null;
	isLoading: boolean;
	isError: boolean;
}

export const useRandomPokemonQuery = (userRound: number, gameState: GameState): UseRandomPokemonQuery => {
	const queryCacheKey = [`${QueryCacheKey.RANDOM_POKEMON}_${userRound}`];

	const queryFn = async () => {
		if (gameState?.roundHistory[`round_${userRound}`]) {
			return gameState.roundHistory[`round_${userRound}`];
		}
		return fetchRandomPokemon();
	};

	const { data, isLoading, isError } = useQuery(queryCacheKey, queryFn, {
		enabled: !!userRound && !gameState?.isFinished,
		refetchOnMount: 'always',
		cacheTime: 0,
		staleTime: 0
	});
	return { randomPokemon: data, isLoading, isError };
};
