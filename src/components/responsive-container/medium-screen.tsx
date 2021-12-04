import React from 'react';

const MediumScreen: React.FC = ({ children }) => {
	return (
		<div className="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
			{children}
		</div>
	);
};

export default MediumScreen;
