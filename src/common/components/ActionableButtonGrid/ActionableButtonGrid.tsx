import { Button, Grid, Typography } from '@mui/material';

export interface UserActions {
	id: string;
	action: () => void;
	text: string;
}

const ActionableButtonGrid = ({ userActions }: { userActions: UserActions[] }) => {
	return (
		<Grid container>
			{userActions.map(action => (
				<Grid
					item
					xs={12}
					md={userActions.length > 1 ? 6 : 12}
					key={action.id}
					sx={{ padding: { xs: '10px', lg: '20px' } }}
				>
					<Button onClick={action.action} sx={{ width: '100%' }}>
						<Typography variant="button">{action.text}</Typography>
					</Button>
				</Grid>
			))}
		</Grid>
	);
};

export default ActionableButtonGrid;
