import axios, { AxiosResponse } from 'axios';

enum HttpMessageSeverity {
	INFO = 'INFO',
	WARN = 'WARN',
	ERROR = 'ERROR'
}

interface HttpResponseMessage {
	severity: HttpMessageSeverity;
	type: string;
	message: string;
	field?: string;
}

export interface HttpResponseBody<T> {
	status: number;
	messages: HttpResponseMessage[];
	data?: T;
}

export interface RandomPokemonReponse {
	choices: string[];
	correctId: number;
	correctImageUrl: string;
}

export interface VerifiedPokemonResponse {
	isCorrect: boolean;
	imageUrl: string;
	name: string;
}

export const fetchRandomPokemon = async (): Promise<RandomPokemonReponse | null> => {
	const response: AxiosResponse<HttpResponseBody<RandomPokemonReponse>> = await axios.get(
		'http://localhost:3123/api/v0/pokemon'
	);
	return response.data.data ?? null;
};

export const verifyPokemon = async (
	pokemonId: number,
	pokemonName: string
): Promise<VerifiedPokemonResponse | null> => {
	const response: AxiosResponse<HttpResponseBody<VerifiedPokemonResponse>> = await axios.put(
		`http://localhost:3123/api/v0/pokemon/${pokemonId}?pokemonName=${pokemonName}`
	);
	return response.data.data ?? null;
};
