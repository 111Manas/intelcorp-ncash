import { Button, Heading, MediumScreen, SmallScreen } from '..';

import React from 'react';
import { RoutePaths } from '../../router';
import { useNavigate } from 'react-router-dom';

const Employee = '/images/employee.svg';
const Financial = '/images/financial.svg';
const Image9 = '/images/bg-9.png';

const DigitalContractSuccessPage = () => {
	const navigate = useNavigate();
	const handleSubmit = () => {
		navigate(RoutePaths.DigitalContractReview);
	};
	return (
		<div className="container p-0">
			<div className="row">
				<div className="col-lg-8 col-md-6 ">
					<MediumScreen>
						<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6  image-class">
							<img
								className="img-fluid"
								width="791"
								height="741"
								src={process.env.PUBLIC_URL + Image9}
								alt="Mobile"
							/>
						</div>
						<div className="textDetail mt-5 mx-5">
							<Heading
								className="mb-3 mt-85"
								text="Lorem ipsum"
								variant="small"
							/>

							<p className="fw-bolder text-secondary">
								Lorem ipsum is a placeholder text commonly used
								to demonstrate <br />
								the visual form of a document or a typeface
								without relying on <br />
								meaningful content.
							</p>
						</div>
					</MediumScreen>
				</div>
				<div className="mt-4  col-lg-4  col-md-6">
					<MediumScreen>
						<div className="container p-0 m-0">
							<div className="card shadow p-3 bg-grey rounded-15 border-0">
								<h2 className="fw-bold">Hi, Sampat</h2>
								<p className="fw-bold">CG: GA898979Y</p>

								<div className="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block text-center">
									<div className="container p-0 m-0">
										<div className="card border-0 shadow bg-white rounded-15 p-3">
											<div className="row">
												<div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6">
													<h6 className=" text-start fw-bold mt-1">
														Congratulation!
													</h6>
													<p className="text-start text-secondary fw-bold ncash_fs-12">
														Your Account Is Active
														Now To Make The Process
														Smooth We Suggest You To
														Enable
													</p>
												</div>
												<div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-0">
													<img
														className="img-fluid"
														width="791"
														height="741"
														src={Image9}
														alt="Mobile"
													/>
												</div>
											</div>
											<div className="row">
												<div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6">
													<Button
														className="btn-darkblue p-1 mx-auto my-auto w-100  ncash_btn-greeting text-white mt-2"
														type="button"
														onClick={handleSubmit}
													>
														Enable Enach
													</Button>
												</div>
												<div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-0  mt-2">
													<span className="text-end ncash_font-14 text-lightblue">
														I will do it later
													</span>
												</div>
											</div>
										</div>
										<div className="card border-0 shadow bg-white rounded-15 p-3 mt-3">
											<div className="row">
												<div className="col-md-8 col-lg-8 col-xl-8 col-xxl-8">
													<h6 className=" text-start fw-bold ">
														De'tax
													</h6>
													<p className="text-start  text-secondary fs-small">
														Increase Employee Take
														Home Salary Without An
														Increase In CTC. Yes!
														That's Possible. Start
														Now
													</p>
												</div>

												<div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4 p-0">
													<div className="rounded-15 p-2  ">
														<img
															className="img-fluid ncash_bg-lightpink icons w-50"
															src={
																process.env
																	.PUBLIC_URL +
																Financial
															}
															alt="Employee"
														/>
													</div>
													<Button
														className="btn-darkblue p-1 mx-auto my-auto w-75 ncash_btn-let-start text-white mt-2"
														type="button"
														onClick={handleSubmit}
													>
														Lets Start
													</Button>
												</div>
											</div>
										</div>
										<div className="card border-0 shadow bg-white rounded-15 p-3 mt-3">
											<div className="row">
												<div className="col-md-8 col-lg-8 col-xl-8 col-xxl-8">
													<h6 className="text-start fw-bold mt-1">
														Employee NPS
													</h6>
													<p className="text-start text-secondary fs-small">
														Play A Better Role As An
														Employer By Managing
														National Pension Scheme
													</p>
												</div>

												<div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4 p-0">
													<div className=" rounded-15 p-2 ">
														<img
															className="img-fluid ncash_bg-lightblue icons w-50"
															src={
																process.env
																	.PUBLIC_URL +
																Employee
															}
															alt="Employee"
														/>
													</div>
													<Button
														className="btn-darkblue p-1 mx-auto my-auto w-75 ncash_btn-let-start text-white mt-2"
														type="button"
														onClick={handleSubmit}
													>
														Lets Start
													</Button>
												</div>
											</div>
										</div>

										<div className="text-center ml-auto mr-auto mt-4 mb-25">
											<Button
												type="button"
												onClick={handleSubmit}
											>
												Continue
											</Button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</MediumScreen>
				</div>
			</div>
			<div className="col-md-12">
				<SmallScreen>
					<div className="container p-0 m-0">
						<div className="card shadow p-2 bg-grey border-0">
							<h1 className="fw-bold">Hi, Sampat</h1>
							<p className="fw-bold">CG: GA898979Y</p>
							<div className=" image-class d-md-none d-lg-none d-xl-none d-xxl-none">
								<img
									className="img-fluid"
									width="791"
									height="741"
									src={Image9}
									alt="BG"
								/>
							</div>

							<div className=" inputCard p-3 mt-4 mb-4 d-md-none d-lg-none d-xl-none d-xxl-none">
								<div className="card border-0 shadow bg-white rounded-15 p-3">
									<div className="row">
										<div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6">
											<h5 className="fs-5 text-start fw-bold mt-1">
												Congratulation!
											</h5>
											<p className="text-start fw-bold">
												Your Account Is Active Now To
												Make The Process Smooth We
												Suggest You To Enable
											</p>
										</div>
									</div>
								</div>
								<div className="card border-0 shadow bg-white rounded-15 p-3 mt-3">
									<div className="row">
										<div className="col-md-8 col-lg-8 col-xl-8 col-xxl-8">
											<h4 className="fs-5 text-start fw-bold mt-1">
												De'tax
											</h4>
											<p className="text-start">
												{' '}
												Increase Employee Take Home
												Salary Without An Increase In
												CTC. Yes! That's Possible. Start
												Now
											</p>
										</div>

										<div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4 p-0">
											<Button
												className="btn-darkblue btn-lg mt-2 w-25 ms-3 text-white ncash_btn-let-start fw-bold p-2 fs-6"
												type="button"
												onClick={handleSubmit}
											>
												Lets Start
											</Button>
										</div>
									</div>
								</div>
								<div className="card border-0 shadow bg-white rounded-15 p-3 mt-3">
									<div className="row">
										<div className="col-md-8 col-lg-8 col-xl-8 col-xxl-8">
											<h4 className="fs-5 text-start fw-bold mt-1">
												Employee NPS
											</h4>
											<p className="text-start">
												{' '}
												Play A Better Role As An
												Employer By Managing National
												Pension Scheme
											</p>
										</div>

										<div className="col-md-4 col-lg-4 col-xl-4 col-xxl-4 p-0">
											<Button
												className="btn-darkblue btn-sm btn-start w-25 ms-3 mt-2 text-white ncash_btn-let-start fw-bold p-2 fs-6"
												type="button"
												onClick={handleSubmit}
											>
												Lets Start
											</Button>
										</div>
									</div>
								</div>
							</div>
							<div className="text-center ml-auto mr-auto mb-5">
								<Button type="button" onClick={handleSubmit}>
									Continue
								</Button>
							</div>
						</div>
					</div>
				</SmallScreen>
			</div>
		</div>
	);
};

export default DigitalContractSuccessPage;
