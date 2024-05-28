import classNames from 'classnames';

interface PokemonImageProps {
	imageUrl: string;
	showImage: boolean;
	id: number;
}

const PokemonImage = (props: PokemonImageProps) => {
	const { imageUrl, showImage, id } = props;
	const pokemonImageClassName = classNames('pokemonImage', {
		pokemonImage__silhouette: !showImage,
		pokemonImage__revealed: !!showImage
	});
	return (
		<img
			src={imageUrl}
			loading="lazy"
			alt={`Pokemon with ID ${id}`}
			onDragStart={e => {
				e.preventDefault();
			}}
			id="pokemonImage"
			className={pokemonImageClassName}
		/>
	);
};

export default PokemonImage;
