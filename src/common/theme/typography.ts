import { Colors } from 'common/theme/colors';
import { Typography } from '@mui/material/styles/createTypography';

export const commonTypography = {
	fontFamily: ['Andy-Bold', 'Helvetica', 'Arial', 'sans-serif'].join(','),
	fontSize: 16,
	body1: {
		fontSize: 16,
		color: Colors.White,
		lineHeight: '20px'
	},
	body2: {
		fontSize: 12,
		lineHeight: '16px',
		color: Colors.White
	},
	h1: {
		fontSize: 40,
		fontWeight: 700,
		color: Colors.White,
		lineHeight: '42px'
	},
	h2: {
		fontSize: 32,
		fontWeight: 700,
		color: Colors.White,
		lineHeight: '40px'
	},
	h3: {
		fontSize: 24,
		fontWeight: 700,
		color: Colors.White,
		lineHeight: '1.2'
	},
	h4: {
		fontSize: 22,
		fontWeight: 700,
		color: Colors.White,
		lineHeight: '28px'
	},
	h5: {
		fontSize: 18,
		fontWeight: 700,
		color: Colors.White,
		lineHeight: '24px'
	},
	button: {
		fontSize: 18,
		lineHeight: '22px',
		color: Colors.Blue,
		textTransform: 'none'
	}
} as Typography;

export default commonTypography;
