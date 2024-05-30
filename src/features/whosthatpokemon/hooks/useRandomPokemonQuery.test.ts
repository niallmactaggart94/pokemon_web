import { useRandomPokemonQuery } from './useRandomPokemonQuery';
import axios from 'axios';
import { renderHook } from '__testUtils__/testRenderHook';
import { GameState } from 'domain/game/gameManager';

jest.mock('axios');

describe('useRandomPokemonQuery Hook', () => {
	beforeEach(() => {
		jest.spyOn(axios, 'get').mockResolvedValue({ data: { data: null } });
	});
	afterEach(() => {
		jest.clearAllMocks();
	});

	it('WHEN no game state is present THEN call API', async () => {
		const { waitFor } = renderHook(() => useRandomPokemonQuery(1, null), {});

		await waitFor(() => {
			expect(axios.get).toHaveBeenCalled();
		});
	});

	it('WHEN game state is present but not current round THEN call API', async () => {
		const gameState: GameState = {
			currentRound: 2,
			currentScore: 10,
			isFinished: false,
			roundHistory: { ['round_1']: { choices: ['a', 'b', 'x'], correctId: 1, correctImageUrl: 'imageUrl' } }
		};
		const { waitFor } = renderHook(() => useRandomPokemonQuery(2, gameState), {});
		await waitFor(() => {
			expect(axios.get).toHaveBeenCalled();
		});
	});

	it('WHEN game state is present with current round THEN return', async () => {
		const gameState: GameState = {
			currentRound: 1,
			currentScore: 10,
			isFinished: false,
			roundHistory: { ['round_1']: { choices: ['a', 'b', 'x'], correctId: 1, correctImageUrl: 'imageUrl' } }
		};
		const { waitFor } = renderHook(() => useRandomPokemonQuery(1, gameState), {});
		await waitFor(() => {
			expect(axios.get).not.toHaveBeenCalled();
		});
	});
});
