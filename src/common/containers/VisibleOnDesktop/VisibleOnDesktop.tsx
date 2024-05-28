import React from 'react';
import { Hidden } from '@mui/material';

const VisibleOnDesktop: React.FC = ({ children }) => {
	return <Hidden mdDown>{children}</Hidden>;
};
export default VisibleOnDesktop;
