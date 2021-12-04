import React from 'react';
import { images } from '../../../utils/staticData';

interface Props {
	icon?: keyof typeof images;
}

const InputGroup: React.FC<
	Props &
		React.DetailedHTMLProps<
			React.InputHTMLAttributes<HTMLInputElement>,
			HTMLInputElement
		>
> = ({ icon = 'building', children, ...otherProps }) => {
	return (
		<div className="input-group p-2 rounded-15 ml-auto mr-auto border-grey">
			<span
				className="input-group-text ncash_w-group-wrapper"
				id="basic-addon1"
			>
				<div className="imageBackground p-1">
					{' '}
					<img
						className="img-fluid icons w-50"
						src={images[icon]}
						alt="Building"
					/>
				</div>
			</span>
			<input {...otherProps} />
		</div>
	);
};

export default InputGroup;
