import { CircularProgress, CircularProgressProps } from '@mui/material';

interface SpinnerProps extends CircularProgressProps {
	className?: string;
}

const Spinner = (props: SpinnerProps) => {
	return (
		<div className={`spinner ${props.className}`}>
			<CircularProgress {...props} />
		</div>
	);
};

Spinner.defaultProps = {
	className: ''
};

export default Spinner;
