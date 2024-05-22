import App from 'App';
import { ROOT_CONTAINER_ID } from 'common/constants/Common';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

const Root = () => {
	return (
		<StrictMode>
			<App />
		</StrictMode>
	);
};

ReactDOM.render(<Root />, document.getElementById(ROOT_CONTAINER_ID));
