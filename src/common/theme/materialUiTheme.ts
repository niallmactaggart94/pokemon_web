import { createTheme } from '@mui/material';
import typography, { commonTypography } from 'common/theme/typography';
import palette, { lightPalette } from 'common/theme/palette';
import breakpoints from 'common/theme/breakpoints';
import commonComponents from './components';

declare module '@mui/styles' {}

export const commonLightTheme = createTheme({
	palette: lightPalette,
	typography: commonTypography,
	breakpoints,
	components: commonComponents
});

const MaterialUiTheme = createTheme({
	palette,
	typography,
	breakpoints,
	components: commonComponents
});

export default MaterialUiTheme;
