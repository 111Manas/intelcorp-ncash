import React from 'react';

interface Props {
	variant?: 'large' | 'medium' | 'small';
	text: string;
	className?: string;
}

const Heading: React.FC<Props> = ({
	variant = 'large',
	text,
	className = '',
}) => {
	return (
		<>
			{(() => {
				switch (variant) {
					case 'large':
						return (
							<h1
								className={`font-weight-bold  heading ${className}`}
							>
								{text}
							</h1>
						);
					case 'medium':
						return (
							<h3
								className={`font-weight-bold  heading ${className}`}
							>
								{text}
							</h3>
						);
					case 'small':
						return (
							<h5
								className={`text-black fw-bold mb-3 mt-85 ${className}`}
							>
								{text}
							</h5>
						);

					default:
						<h1
							className={`font-weight-bold text-center  heading ${className}`}
						>
							{text}
						</h1>;
				}
			})()}
		</>
	);
};

export default Heading;
