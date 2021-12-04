import { BackButton, Button, Heading, MediumScreen, SmallScreen } from '..';

import React from 'react';
import { RoutePaths } from '../../router';
import { useNavigate } from 'react-router-dom';

const Image1 = '/images/bg-9.png';
const cardIcon = '/images/icons/card.svg';
const npsIcon = '/images/icons/nps.svg';
const serviceIcon = '/images/icons/service.svg';

const SelectServices = () => {
	const navigate = useNavigate();
	const handleSubmit = () => {
		navigate(RoutePaths.DigitalContractSuccess);
	};

	return (
		<div>
			<div className="container p-0">
				<div className="row">
					<div className="col-lg-8 col-md-6 ">
						<MediumScreen>
							<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6   image-class">
								<img
									className="img-fluid"
									width="791"
									height="741"
									src={process.env.PUBLIC_URL + Image1}
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
									Lorem ipsum is a placeholder text commonly
									used to demonstrate <br />
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
									<BackButton text="Select Services" />

									<p className="d-none d-sm-none d-md-block text-center mb-0 fw-bold text-black mt-2 mb-3">
										Please Select The Service You Want{' '}
										<br />
										To Apply
									</p>
									<div className="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block text-center">
										<div className="container p-0 m-0">
											<div className="card border-0 shadow bg-white rounded-15 p-3">
												<div className="row">
													<div className="col-md-2 col-lg-2 col-xl-2 col-xxl-2">
														<div className=" rounded-15  mt-4">
															<img
																className="img-fluid ncash_bg-lightpink"
																src={
																	process.env
																		.PUBLIC_URL +
																	cardIcon
																}
																alt="Card"
															/>
														</div>
													</div>

													<div className="col-md-9 col-lg-9 col-xl-9 col-xxl-9 p-0">
														<h4 className="fs-5 text-start fw-bold mt-1">
															De'tax Card
														</h4>
														<div className="text-secondary text-start fs-small font-15">
															Increase Employee
															Take Home Salary
															Without An Increase
															In CTC.
														</div>
													</div>
													<div className="col-md-1 col-lg-1 p-0">
														<input
															className="form-check-input mt-4 cardCheckbox"
															type="checkbox"
															value=""
															aria-label="..."
														/>
													</div>
												</div>
											</div>
											<div className="card border-0 shadow bg-white rounded-15 p-3 mt-3">
												<div className="row">
													<div className="col-md-2 col-lg-2 col-xl-2 col-xxl-2">
														<div className=" rounded-15  mt-4">
															<img
																className="img-fluid ncash_bg-lightblue "
																src={
																	process.env
																		.PUBLIC_URL +
																	npsIcon
																}
																alt="NPS"
															/>
														</div>
													</div>

													<div className="col-md-9 col-lg-9 col-xl-9 col-xxl-9 p-0">
														<h4 className="fs-5 text-start fw-bold mt-1">
															Employee NPS
														</h4>
														<div className="text-secondary text-start fs-small font-12">
															Play A Better Role
															As An Employer By
															Managing National
															Pension
														</div>
													</div>
													<div className="col-md-1 col-lg-1 col-xl-1 col-xxl-1 p-0">
														<input
															className="form-check-input mt-4 cardCheckbox"
															type="checkbox"
															value=""
															aria-label="..."
														/>
													</div>
												</div>
											</div>
											<div className="card border-0 shadow bg-white rounded-15 p-3 mt-3">
												<div className="row">
													<div className="col-md-2 col-lg-2 col-xl-2 col-xxl-2">
														<div className=" rounded-15  mt-4">
															<img
																className="img-fluid ncash_bg-lightpurple "
																src={
																	process.env
																		.PUBLIC_URL +
																	serviceIcon
																}
																alt="card"
															/>
														</div>
													</div>

													<div className="col-md-9 col-lg-9 col-xl-9 col-xxl-9 p-0">
														<h4 className="fs-5 text-start fw-bold mt-1">
															Smart Financial
															Services
														</h4>
														<div className="text-secondary text-start fs-small font-12">
															Upload Your Bank
															Statements And Get
															To Know What Amount
															Of Money.{' '}
														</div>
													</div>
													<div className="col-md-1 col-lg-1 col-xl-1 col-xxl-1 p-0">
														<input
															className="form-check-input mt-4 cardCheckbox"
															type="checkbox"
															value=""
															aria-label="..."
														/>
													</div>
												</div>
											</div>

											<div className="text-center ml-auto mr-auto mt-4 mb-4">
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
							<div className="card shadow p-3 bg-grey border-0">
								<BackButton text="Select Services" />
								<div className=" d-none image-class d-md-none d-lg-none d-xl-none d-xxl-none">
									<img
										className="img-fluid"
										width="791"
										height="741"
										src={process.env.PUBLIC_URL + Image1}
										alt="BG"
									/>
								</div>

								<p className="d-md-none d-lg-none d-xl-none d-xxl-none text-center mt-1 fs-small fw-bold text-black ">
									Please Select The Service You Want To Apply{' '}
								</p>
								<div className=" inputCard p-3 mt-1 mb-4 d-md-none d-lg-none d-xl-none d-xxl-none">
									<div className="card border-0 shadow bg-white rounded-15 p-3">
										<div className="row">
											<div className="col-2 col-sm-2">
												<div className=" rounded-15 mt-4">
													<img
														className="img-fluid icon w-100 ncash_bg-lightpink"
														src={
															process.env
																.PUBLIC_URL +
															cardIcon
														}
													/>
												</div>
											</div>

											<div className="col-9 col-sm-9 p-0">
												<p className="fs-6 text-left fw-bold mt-1 mb-0">
													De'tax Card
												</p>
												<div className="text-secondary ncash_fs-12">
													Increase Employee Take Home
													Salary Without An Increase
													In CTC. Yes that`s possible
													start now
												</div>
											</div>
											<div className="col-1 col-sm-1 p-0 mt-4">
												<input
													className="form-check-input mt-3 cardCheckbox"
													type="checkbox"
													value=""
													aria-label="..."
												/>
											</div>
										</div>
									</div>
									<div className="card border-0 shadow bg-white rounded-15 p-3 mt-3">
										<div className="row">
											<div className="col-2 col-sm-2">
												<div className=" rounded-15  mt-4">
													<img
														className="img-fluid ncash_bg-lightblue"
														src={
															process.env
																.PUBLIC_URL +
															npsIcon
														}
													/>
												</div>
											</div>

											<div className="col-9 col-sm-9 p-0">
												<p className="fs-6 text-left fw-bold mt-1 mb-0">
													Employee NPS
												</p>
												<div className="text-secondary ncash_fs-12">
													Play A Better Role As An
													Employer By Managing
													National Pention Scheme For
													Your Employees In Simple
													Steps.
												</div>
											</div>
											<div className="col-1 col-sm-1 p-0 mt-3">
												<input
													className="form-check-input mt-3 cardCheckbox"
													type="checkbox"
													value=""
													aria-label="..."
												/>
											</div>
										</div>
									</div>
									<div className="card border-0 shadow bg-white rounded-15 p-2 mt-3">
										<div className="row">
											<div className="col-2 col-sm-2">
												<div className="rounded-15  mt-4">
													<img
														className="img-fluid w-100 ncash_bg-lightpurple "
														src={
															process.env
																.PUBLIC_URL +
															serviceIcon
														}
													/>
												</div>
											</div>

											<div className="col-9 col-sm-2 p-0">
												<p className="fs-6 text-left fw-bold mt-1 mb-0">
													Smart Financial Services
												</p>
												<div className="text-secondary ncash_fs-12">
													Upload Your Bank Statements
													And Get To Know What Amount
													Of Money Could Be Saved,
													What Can Be The Next Best
													Decision.
												</div>
											</div>
											<div className="col-1 col-sm-1 p-0 mt-4">
												<input
													className="form-check-input mt-3 cardCheckbox"
													type="checkbox"
													value=""
													aria-label="..."
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="text-center ml-auto mr-auto mb-5">
									<Button
										type="button"
										onClick={handleSubmit}
									>
										Continue
									</Button>
								</div>
							</div>
						</div>
					</SmallScreen>
				</div>
			</div>
		</div>
	);
};

export default SelectServices;
