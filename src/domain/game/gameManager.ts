import { RandomPokemonReponse } from 'features/whosthatpokemon/services/pokemon';

const CURRENT_GAME_STATE_KEY = 'currentGameState';

export interface GameState {
	currentScore: number;
	currentRound: number;
	roundHistory: {
		[userRound: string]: RandomPokemonReponse;
	};
	isFinished: boolean;
}
export const saveGameStateInStorage = (state: GameState) => {
	sessionStorage.setItem(CURRENT_GAME_STATE_KEY, JSON.stringify(state));
};

export const getGameStateFromStorage = (): GameState => {
	const state = sessionStorage.getItem(CURRENT_GAME_STATE_KEY);
	return state && JSON.parse(state);
};

export const clearGameStateFromStorage = (): void => {
	sessionStorage.removeItem(CURRENT_GAME_STATE_KEY);
};
