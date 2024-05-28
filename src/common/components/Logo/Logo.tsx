import { Box } from '@mui/material';
import logo from 'static/images/pokemon-icon.svg';
import { goHome } from 'utils';

interface PokemonLogoProps {
	className?: string;
}

const PokemonLogo = (props: PokemonLogoProps) => {
	const { className } = props;

	const onClickLogo = e => {
		e.preventDefault();
		goHome();
	};

	return (
		<Box className="pokemonLogoWrapper">
			<img alt="Logo" src={logo} className={className} height="100%" onClick={onClickLogo} />
		</Box>
	);
};

export default PokemonLogo;
