import {
	BackButton,
	Button,
	CardRow,
	InlineButton,
	InputGroup,
	SmallScreen,
} from '..';

import React from 'react';
import { RoutePaths } from '../../router';
import { useNavigate } from 'react-router-dom';

const User = '/images/user.svg';
const Group = '/images/icons/group-1.svg';
const Image1 = '/images/bg-1.png';

const DigitalContractPage = () => {
	const navigate = useNavigate();
	const handleSubmit = () => {
		navigate(RoutePaths.SelectServices);
	};
	return (
		<div>
			<div className="container p-0">
				<div className="row">
					<div className="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block col-md-6 col-lg-7 col-xl-8 col-xxl-8">
						<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6  image-class">
							<img
								className="img-fluid"
								width="948"
								height="707"
								src={process.env.PUBLIC_URL + Image1}
								alt="Mobile"
							/>
						</div>
						<div className="textDetail mt-4 mx-5">
							<h5 className="text-black fw-bold mb-3 mt-120">
								Lorem ipsum
							</h5>
							<p className="fw-bolder text-secondary">
								Lorem ipsum is a placeholder text commonly used
								to demonstrate <br />
								the visual form of a document or a typeface
								without relying on <br />
								meaningful content.
							</p>
						</div>
					</div>
					<div className="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block col-md-6 col-lg-5 col-xl-4 col-xxl-4 mt-4">
						<div className="container p-0 m-0">
							<div className="card shadow px-4 py-2 bg-grey rounded-15 border-0 mb-5">
								<BackButton text="Digital Contract" />

								<div className="card border-0 shadow bg-white mt-3 rounded-15 px-4 pt-3 pb-3">
									<div className="row">
										<div className="col-12 p-0 m-0">
											<div
												className="accordion"
												id="accordionExample"
											>
												<div className="accordion-item">
													<h2
														className="accordion-header"
														id="headingOne"
													>
														<Button
															className="accordion-button fw-bold contractAccordion fs-6 
                              "
															type="button"
															data-bs-toggle="collapse"
															data-bs-target="#collapseOne"
															aria-expanded="true"
															aria-controls="collapseOne"
														>
															<img
																className="img-fluid ncash_w-8 ms-2 me-3"
																src={
																	process.env
																		.PUBLIC_URL +
																	Group
																}
																alt="Group"
															/>
															Select Directors
														</Button>
													</h2>
													<div
														id="collapseOne"
														className="accordion-collapse collapse"
														aria-labelledby="headingOne"
														data-bs-parent="#accordionExample"
													>
														{Array.from(
															{ length: 4 },
															(_, i) => i++
														).map((_, i) => (
															<CardRow
																title="Sampat"
																img={User}
																key={i}
															/>
														))}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="card border-0 shadow bg-white rounded-15 mt-3 p-3">
									<div className="row">
										<div className="col-12 pe-3">
											<div className="row">
												<div className="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block text-center">
													<h6 className="fw-bold text-start">
														Authorized Signatory
														Details
													</h6>
													<p className="fw-bold text-start">
														{' '}
														Signatory - 1
													</p>
													<div className="mb-2">
														<InputGroup
															icon="user"
															type="text"
															className="form-control input-field p-2"
															placeholder="Enter your name"
															aria-label="Username"
															aria-describedby="basic-addon1"
														/>
													</div>
													<div className="mb-3">
														<InputGroup
															icon="mail"
															type="text"
															className="form-control input-field p-2"
															placeholder="E-mail"
															aria-label="Username"
															aria-describedby="basic-addon1"
														/>
													</div>
													<div className="mb-3">
														<InputGroup
															icon="phone"
															type="text"
															className="form-control input-field p-2"
															placeholder="Mobile No"
															aria-label="Username"
															aria-describedby="basic-addon1"
														/>
													</div>
													<div className=" d-flex w-100 justify-content-end">
														<InlineButton
															color="secondary"
															text=" + Add More "
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="text-center ml-auto mr-auto mt-5 pb-3">
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
				<div className="col-md-12">
					<SmallScreen>
						<div className="container p-0 m-0">
							<div className="card shadow bg-grey pt-3  border-0">
								<BackButton text="Digital Contract" />

								<div className="card border-0 rounded-15 mt-3 p-3 ms-3 me-3  ">
									<div className="row">
										<div
											className="accordion"
											id="accordionExample"
										>
											<div className="accordion-item">
												<h2
													className="accordion-header"
													id="headingOne"
												>
													<Button
														className="accordion-button fw-bold contractAccordion fs-6"
														type="button"
														data-bs-toggle="collapse"
														data-bs-target="#collapseOne"
														aria-expanded="true"
														aria-controls="collapseOne"
													>
														<img
															className="img-fluid ncash_w-8 ms-1 me-4"
															src={
																process.env
																	.PUBLIC_URL +
																Group
															}
															alt="Group"
														/>
														Select Directors
													</Button>
												</h2>
												<div
													id="collapseOne"
													className="accordion-collapse collapse"
													aria-labelledby="headingOne"
													data-bs-parent="#accordionExample"
												>
													<div className="accordion-body">
														{Array.from(
															{ length: 4 },
															(_, i) => i++
														).map((_, i) => (
															<CardRow
																title="Sampat"
																img={User}
																key={i}
																size="sm"
															/>
														))}
													</div>
												</div>
											</div>
										</div>
										<div className="  mt-3 p-3">
											<div className="row">
												<div className="col-12 pe-3">
													<div className="row">
														<div className=" card border-0 shadow bg-white rounded-15 d-md-block d-lg-block d-xl-block d-xxl-block text-center">
															<h6 className="fw-bold text-start">
																Authorized
																Signatory
																Details
															</h6>
															<p className="fw-bold text-start">
																{' '}
																Signatory - 1
															</p>
															<div className="mb-2">
																<InputGroup
																	icon="user"
																	type="text"
																	className="form-control input-field p-2"
																	placeholder="Enter your name"
																	aria-label="Username"
																	aria-describedby="basic-addon1"
																/>
															</div>
															<div className="mb-3">
																<InputGroup
																	icon="mail"
																	type="text"
																	className="form-control input-field p-2"
																	placeholder="E-mail"
																	aria-label="Username"
																	aria-describedby="basic-addon1"
																/>
															</div>
															<div className="mb-3">
																<InputGroup
																	icon="phone"
																	type="text"
																	className="form-control input-field p-2"
																	placeholder="Mobile No"
																	aria-label="Username"
																	aria-describedby="basic-addon1"
																/>
															</div>{' '}
															<div className=" d-flex w-100 justify-content-end mb-3">
																<InlineButton
																	color="secondary"
																	text=" + Add More "
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="text-center ml-auto mr-auto mt-5 pb-3">
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
					</SmallScreen>
				</div>
			</div>
		</div>
	);
};

export default DigitalContractPage;
