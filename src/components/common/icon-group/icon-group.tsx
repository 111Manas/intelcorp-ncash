import React from 'react';
import s from './icon-group.module.scss';

type IconGroupProps = {
	src: string;
	bg?: string;
};

const IconGroup: React.FC<IconGroupProps> = ({ src, bg = '#ddf3ff' }) => {
	return (
		<div className={s['wrapper-md']} style={{ backgroundColor: bg }}>
			<img className="img-fluid icons w-50" src={src} alt="Building" />
		</div>
	);
};

export default IconGroup;
