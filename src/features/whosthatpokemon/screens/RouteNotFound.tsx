import { Box, Button, Typography } from '@mui/material';
import { goHome } from 'utils';

const RouteNotFound = () => {
	
	return (
		<Box sx={{ padding: '20px' }}>
			<Typography variant="h1" sx={{ paddingBottom: '20px' }}>
				Page not found
			</Typography>
			<Button onClick={goHome}>
				<Typography variant="button">Go Home</Typography>
			</Button>
		</Box>
	);
};

export default RouteNotFound;
