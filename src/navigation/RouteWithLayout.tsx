import * as React from 'react';
import { Route } from 'react-router-dom';
import { RouteProps } from 'react-router';

export interface LayoutProps {
	children?: React.ReactNode;
}

type RoutePropsWithoutRender = {
	[Property in keyof Omit<RouteProps, 'render'>]: RouteProps[Property];
};

interface RouteWithLayoutProps extends RoutePropsWithoutRender {
	component: React.ComponentType;
	layout: React.ComponentType<LayoutProps>;
}

const RouteWithLayout: React.FC<RouteWithLayoutProps> = props => {
	const { component: Component, layout: Layout, ...rest } = props;

	return (
		<Route
			{...rest}
			render={props => (
				<Layout>
					<React.Fragment>
						<Component {...props} />
					</React.Fragment>
				</Layout>
			)}
		/>
	);
};

export default RouteWithLayout;
