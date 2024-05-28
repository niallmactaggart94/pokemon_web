import 'static/sass/App.scss';
import { QueryClientProvider } from 'react-query';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
import GlobalMuiTheme from 'common/theme/materialUiTheme';
import { queryClient } from 'domain/queryClient/queryClientManager';
import Navigation from 'navigation/Navigation';

const App = () => {
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={GlobalMuiTheme}>
				<StylesProvider injectFirst>
					<QueryClientProvider client={queryClient}>
						<Navigation />
					</QueryClientProvider>
				</StylesProvider>
			</ThemeProvider>
		</StyledEngineProvider>
	);
};

export default App;
