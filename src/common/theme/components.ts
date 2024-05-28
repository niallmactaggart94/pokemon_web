import { Components, Theme } from '@mui/material';
import { Colors } from 'common/theme/colors';

export const commonComponents = {
	MuiButton: {
		styleOverrides: {
			root: {
				boxShadow: 'none',
				maxHeight: 40,
				fontSize: 16,
				textTransform: 'none',
				'&:hover': {
					backgroundColor: Colors.Yellow,
					opacity: 0.9,
					boxShadow: 'none'
				},
				backgroundColor: Colors.Yellow
			}
		}
	}
} as Components<Omit<Theme, 'components'>>;

export default commonComponents;
