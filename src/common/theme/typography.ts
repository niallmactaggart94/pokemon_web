import { Colors } from 'common/theme/colors';
import { Typography } from '@mui/material/styles/createTypography';

export const legacyTypography = {
	fontFamily: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'].join(','),
	fontSize: 16,
	body1: {
		fontSize: 16,
		color: Colors.White,
		lineHeight: '20px'
	},
	body2: {
		fontSize: 12,
		lineHeight: '16px',
		color: Colors.GrayDark
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
	}
} as Typography;

export const commonTypography = {
	...legacyTypography,
	fontSize: 14,
	overline: {
		fontSize: '12px',
		lineHeight: '12px',
		transform: 'uppercase'
	},
	tooltip: {},
	caption: {
		fontSize: '12px',
		lineHeight: '20px'
	},
	body1: {
		fontSize: '14px',
		lineHeight: '18px',
		fontWeight: 300
	},
	body2: {
		fontSize: '10px',
		lineHeight: '14px',
		fontWeight: 300
	},
	subtitle1: {
		fontSize: '18px',
		lineHeight: '24px'
	},
	subtitle2: {
		fontSize: '14px',
		lineHeight: '18px'
	},
	h6: {
		fontSize: '12px',
		lineHeight: '16px'
	},
	h5: {
		fontSize: '18px',
		lineHeight: '21px',
		fontWeight: 600
	},
	h4: {
		fontSize: '21px',
		lineHeight: '24px'
	},
	h3: {
		fontSize: '24px',
		lineHeight: '28px',
		fontWeight: 600
	},
	h2: {
		fontSize: '44px',
		lineHeight: '48px',
		fontWeight: 600
	},
	h1: {
		fontSize: '56px',
		lineHeight: '64px',
		fontWeight: 600
	}
};

export default legacyTypography;
