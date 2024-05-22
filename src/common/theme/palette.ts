import { Colors } from 'common/theme/colors';
import { Palette } from '@mui/material/styles/createPalette';

export const lightPalette = {
	mode: 'light',
	primary: {
		main: Colors.Primary
	},
	secondary: {
		main: Colors.GrayDark,
		light: Colors.GrayLight,
		dark: Colors.GrayDark3
	},
	text: {
		primary: Colors.Black,
		secondary: Colors.DescriptionGray
	}
} as Palette;

export default {
	mode: 'dark',
	primary: {
		main: Colors.Primary
	},
	secondary: {
		main: Colors.GrayDark,
		light: Colors.GrayLight,
		dark: Colors.GrayDark3
	},
	text: {
		primary: Colors.White,
		secondary: Colors.Gray
	}
} as Palette;
