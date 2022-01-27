import { BackButton, Button, Heading, MediumScreen, SmallScreen } from "..";

import React from "react";
import { RoutePaths } from "../../router";
import { useNavigate } from "react-router-dom";

const Building = "/images/icons/building.svg";
const Image1 = "/images/bg-1.png";
const User = "/images/icons/user.svg";

const CompanyDetailsPage = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(RoutePaths.DigitalContractPage);
  };
  return (
    <div>
      <div className="container p-0">
        <div className="row">
          <div className="col-lg-8 col-md-6 ">
            <MediumScreen>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mx-auto image-class">
                <img
                  className="img-fluid"
                  width="791"
                  height="741"
                  src={Image1}
                  alt="Mobile"
                />
              </div>
              <div className="textDetail mt-5">
                <Heading
                  className="mb-3 mt-85"
                  text="Lorem ipsum"
                  variant="small"
                />

                <p className="fw-bolder text-secondary">
                  Lorem ipsum is a placeholder text commonly used to demonstrate{" "}
                  <br />
                  the visual form of a document or a typeface without relying on{" "}
                  <br />
                  meaningful banda content.
                </p>
              </div>
            </MediumScreen>
          </div>
          <div className="mt-4  col-lg-4  col-md-6">
            <MediumScreen>
              <div className="container-fluid p-0 m-0">
                <div className="card shadow p-4 bg-grey rounded-15 border-0">
                  <BackButton text="Company Details" />
                  <div className="card shadow p-4 mt-2 bg-white rounded-15 border-0">
                    <div className="form-group">
                      <label className="fs-small fw-bold">Company Name</label>
                      <p className="label fs-6 fw-bold">
                        ROCKET FLYER TECHNOLOGY PRIVATE LIMITED
                      </p>
                      <hr className="opacity:0.4" />
                    </div>
                    <div className="form-group">
                      <label className="fs-small fw-bold">CIN</label>
                      <p className="label fs-6 fw-bold">
                        U74999MP2017PTC044578
                      </p>
                      <hr />
                    </div>
                    <div className="form-group">
                      <label className="fs-small fw-bold">ROC Code</label>
                      <p className="label fs-6 fw-bold">RADO 313</p>
                      <hr />
                    </div>
                    <div className="form-group">
                      <label className="fs-small fw-bold">
                        Registration No
                      </label>
                      <p className="label fs-6 fw-bold">RIOEODEM39093</p>
                      <hr />
                    </div>
                    <div className="form-group">
                      <label className="fs-small fw-bold">
                        Date Of Incorporation
                      </label>
                      <p className="label fs-6 fw-bold">23-August-2021</p>
                      <hr />
                    </div>
                    <div className="form-group">
                      <label className="fs-small fw-bold">
                        Registration Address
                      </label>
                      <p className="label fs-6 fw-bold">
                        159 B,Veena Nagar Sukhliya Indore Indore MP 452010 IN
                      </p>
                    </div>
                  </div>
                  <div className="row px-2 mt-4 align-items-center ">
                    <div
                      className="accordion accordion-flush"
                      id="accordionExample"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button fw-bold fs-6"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <span className="d-inline-block me-3">
                              <img
                                src={Building}
                                alt="group"
                                style={{
                                  height: "2rem",
                                  width: "2rem",
                                }}
                              />
                            </span>
                            <span>Director/Signatory Details</span>
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <div>
                              <div className="row mb-3">
                                <div className="col-2">
                                  <div className=" rounded-15  mt-1">
                                    <img
                                      className="img-fluid  ncash_imageBackgroundicon w-100 "
                                      src={User}
                                    />
                                  </div>
                                </div>

                                <div className="col-10">
                                  <h6 className="text-start fw-bold mt-2">
                                    Sampat
                                  </h6>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-2">
                                  <div className=" rounded-15  mt-1">
                                    <img
                                      className="img-fluid  ncash_imageBackgroundicon w-100 "
                                      src={User}
                                    />
                                  </div>
                                </div>
                                <div className="col-10">
                                  <h6 className="text-start fw-bold mt-2">
                                    Sampat
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center ml-auto mr-auto mt-3 mb-3">
                    <Button type="button" onClick={handleSubmit}>
                      Continue
                    </Button>
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
                <BackButton text="Details" />
                <div className="row  mb-2 mt-2 ">
                  <div className="col-2 ">
                    <img
                      className="img-fluid ncash_bg-lightblue w-100"
                      src={Building}
                    />
                  </div>
                  <div className="col-10 mt-1">
                    <h4 className="fw-bold ncash_companyHeading">
                      Company Details
                    </h4>
                  </div>
                </div>
                <div className="image-class d-none d-md-none d-lg-none d-xl-none d-xxl-none">
                  <img
                    className="img-fluid"
                    width="791"
                    height="741"
                    src={Image1}
                    alt="BG"
                  />
                </div>
                <div className="card shadow p-4 mt-2 bg-white rounded-15 border-0">
                  <div className="form-group">
                    <label className="fs-small fw-bold">Company Name</label>
                    <p className="label fs-6 fw-bold">
                      ROCKET FLYER TECHNOLOGY PRIVATE LIMITED
                    </p>
                    <hr className="opacity:0.4" />
                  </div>
                  <div className="form-group">
                    <label className="fs-small fw-bold">CIN</label>
                    <p className="label fs-6 fw-bold">U74999MP2017PTC044578</p>
                    <hr />
                  </div>
                  <div className="form-group">
                    <label className="fs-small fw-bold">ROC Code</label>
                    <p className="label fs-6 fw-bold">RADO 313</p>
                    <hr />
                  </div>
                  <div className="form-group">
                    <label className="fs-small fw-bold">Registration No</label>
                    <p className="label fs-6 fw-bold">RIOEODEM39093</p>
                    <hr />
                  </div>
                  <div className="form-group">
                    <label className="fs-small fw-bold">
                      Date Of Incorporation
                    </label>
                    <p className="label fs-6 fw-bold">23-August-2021</p>
                    <hr />
                  </div>
                  <div className="form-group">
                    <label className="fs-small fw-bold">
                      Registration Address
                    </label>
                    <p className="label fs-6 fw-bold">
                      159 B,Veena Nagar Sukhliya Indore Indore MP 452010 IN
                    </p>
                  </div>
                </div>

                <div className="row px-2 mt-4 align-items-center ">
                  <div
                    className="accordion accordion-flush"
                    id="accordionExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button fw-bold fs-6"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <span className="d-inline-block me-3">
                            <img
                              className="ncash_bg-lightblue"
                              src={Building}
                              alt="group"
                              style={{
                                height: "2.2rem",
                                width: "2.2rem",
                              }}
                            />
                          </span>
                          <span>Director/Signatory Details</span>
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div>
                            <div className="row mb-3">
                              <div className="col-2">
                                <div className=" rounded-15  mt-1">
                                  <img
                                    className="img-fluid  ncash_imageBackgroundicon w-100 "
                                    src={User}
                                  />
                                </div>
                              </div>

                              <div className="col-10">
                                <h6 className="text-start fw-bold mt-2">
                                  Sampat
                                </h6>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-2">
                                <div className=" rounded-15  mt-1">
                                  <img
                                    className="img-fluid  ncash_imageBackgroundicon w-100 "
                                    src={User}
                                  />
                                </div>
                              </div>
                              <div className="col-10">
                                <h6 className="text-start fw-bold mt-2">
                                  Sampat
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
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
    </div>
  );
};

export default CompanyDetailsPage;
