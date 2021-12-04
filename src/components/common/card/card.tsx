import React from 'react';

const Card: React.FC = ({ children }) => {
	return (
		<div className="p-2 w-100 ncash_card-rounded bg-white">{children}</div>
	);
};

export default Card;
