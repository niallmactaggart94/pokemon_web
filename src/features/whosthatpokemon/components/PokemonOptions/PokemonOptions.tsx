import { Button, Grid, Typography } from '@mui/material';
import { RandomPokemonReponse } from 'features/whosthatpokemon/services/pokemon';

interface PokemonOptionsProps {
	randomPokemon: RandomPokemonReponse;
	handleUserGuess: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
}

const PokemonOptions = (props: PokemonOptionsProps) => {
	const { randomPokemon, handleUserGuess } = props;
	return (
		<Grid container>
			{randomPokemon.choices.map((choice, i) => (
				<Grid item xs={12} md={6} key={i} sx={{ padding: { xs: '10px', lg: '20px' } }}>
					<Button value={choice} onClick={handleUserGuess} sx={{ width: '100%' }}>
						<Typography variant="button">{choice}</Typography>
					</Button>
				</Grid>
			))}
		</Grid>
	);
};

export default PokemonOptions;
