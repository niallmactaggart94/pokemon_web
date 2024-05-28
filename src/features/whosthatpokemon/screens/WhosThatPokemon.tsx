import { Box, Typography } from '@mui/material';
import PokemonQuiz from '../components/PokemonQuiz/PokemonQuiz';

const WhosThatPokemon = () => {
	return (
		<Box className="pokemonGame">
			<Typography variant="h1">Who&#39;s that pokemon?</Typography>
			<PokemonQuiz />
		</Box>
	);
};

export default WhosThatPokemon;
