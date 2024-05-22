import HeaderBar from 'common/components/HeaderBar/HeaderBar';
import { LayoutProps } from 'navigation/RouteWithLayout';

const Home = ({ children }: LayoutProps) => {
	return (
		<div className="mainWrapper">
			<HeaderBar />
			<div className="screen">
				<main className="screen__content">{children}</main>
			</div>
		</div>
	);
};

export default Home;
