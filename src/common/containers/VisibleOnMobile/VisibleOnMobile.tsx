import React from 'react';
import { Hidden } from '@mui/material';

const VisibleOnMobile: React.FC = ({ children }) => {
	return <Hidden mdUp>{children}</Hidden>;
};
export default VisibleOnMobile;
