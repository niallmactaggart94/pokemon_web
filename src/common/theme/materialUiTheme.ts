import { createTheme } from '@mui/material';
import typography, { commonTypography } from 'common/theme/typography';
import palette, { lightPalette } from 'common/theme/palette';
import breakpoints from 'common/theme/breakpoints';

declare module '@mui/styles' {}

// NOTE: From recast-common-front-end
export const commonLightTheme = createTheme({
	palette: lightPalette,
	typography: commonTypography,
	breakpoints
});

// NOTE: Existing partner web theme
const MaterialUiTheme = createTheme({
	palette,
	typography,
	breakpoints
});

export default MaterialUiTheme;
