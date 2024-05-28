import { Colors } from 'common/theme/colors';
import { Palette } from '@mui/material/styles/createPalette';

export const lightPalette = {
	mode: 'light',
	primary: {
		main: Colors.Yellow
	},
	text: {
		primary: Colors.Black,
		secondary: Colors.Blue
	}
} as Palette;

export default {
	mode: 'dark',
	primary: {
		main: Colors.Blue
	},
	text: {
		primary: Colors.White,
		secondary: Colors.Gray
	}
} as Palette;
