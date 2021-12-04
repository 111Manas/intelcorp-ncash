import React from 'react';

interface Props {
	img: string;
	title: string;
	size?: 'md' | 'sm';
}

const CardRow = ({ img, title, size = 'md' }: Props) => {
	return (
		<>
			{size === 'md' ? (
				<div className="row p-2">
					<div className="col-md-2 col-lg-2 col-xl-2 col-xxl-2 bg-pink  ">
						<img
							className="img-fluid  ncash_imageBackgroundicon w-100 "
							src={process.env.PUBLIC_URL + img}
							alt="User"
						/>
					</div>

					<div className="col-md-9 col-lg-9 col-xl-9 col-xxl-9 p-0">
						<h5 className="fs-small text-left fw-bold mt-1">
							{title}
						</h5>
					</div>
					<div className="col-md-1 col-lg-1 p-0">
						<input
							className="form-check-input  cardCheckbox"
							type="checkbox"
							value=""
							aria-label="..."
						/>
					</div>
				</div>
			) : (
				<div className="row mb-3">
					<div className="col-2">
						<div className=" rounded-15  mt-1">
							<img
								className="img-fluid  ncash_imageBackgroundicon w-100 "
								src={process.env.PUBLIC_URL + img}
								alt="User"
							/>
						</div>
					</div>

					<div className="col-9">
						<h6 className="text-start  fw-bold mt-">{title}</h6>
					</div>
					<div className="col-1 p-0">
						<input
							className="form-check-input  cardCheckbox"
							type="checkbox"
							value=""
							aria-label="..."
						/>
					</div>
				</div>
			)}
		</>
	);
};

export default CardRow;
