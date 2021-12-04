import React from "react";
import Image9 from "../../assets/images/bg-9.png";
import ArrowLeft from "../../assets/images/arrow-left-short.svg";
import Edit from "../../assets/images/edit.svg";
import Card from "../../assets/images/pinkCard.svg";
import Employee from "../../../public/images/icons/employee.svg";
import Financial from "../../../public/images/icons/financial.svg";
const Page9 = () => {
  return (
    <div>
      <div className="container p-0">
        <div className="row">
          <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block col-md-6 col-lg-6 col-xl-7 col-xxl-8">
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7 mx-auto image-class">
              <img
                className="img-fluid"
                width="687"
                height="707"
                src={Image9}
                alt="image"
              />
            </div>
            <div className="textDetail mt-5">
              <h5 className="text-black fw-bold mb-3 mt-120">Lorem ipsum</h5>
              <p className="fw-bolder text-grey">
                Lorem ipsum is a placeholder text commonly used to demonstrate{" "}
                <br />
                the visual form of a document or a typeface without relying on{" "}
                <br />
                meaningful content.
              </p>
            </div>
          </div>
          <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block col-md-6 col-lg-6 col-xl-5 col-xxl-4 mt-4">
            <div className="container p-0 m-0">
              <div className="card shadow p-3 bg-grey rounded-15 border-0 mb-5">
                <h3 className="fw-bold text-left mb-3 subheading">
                  <span>
                    <img className="img-fluid arrowLeft" src={ArrowLeft} />{" "}
                    &nbsp; Select Services
                  </span>
                </h3>
                <p className="cardtitle text-center fw-bold">
                  Please Select The Service You Want <br />
                  To Apply
                </p>
                <div className="card border-0 shadow bg-white rounded-15 p-3">
                  <div className="row">
                    <div className="col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                      <div className="bg-lightpink rounded-15 p-2 mt-2">
                        <img className="img-fluid" src={Card} />
                      </div>
                    </div>

                    <div className="col-md-9 col-lg-9 col-xl-9 col-xxl-9 p-0">
                      <h4 className="fs-5 text-left fw-bold mt-1">
                        De'tax Card
                      </h4>
                      <div className="text-secondary font-12">
                        Increase Employee Take Home Salary Without An <br />
                        Increase In CTC. Yes! That's Possible. Start Now.
                      </div>
                    </div>
                    <div className="col-md-1 col-lg-1 p-0">
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
                    <div className="col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                      <div className="bg-lightblue rounded-15 p-2 mt-2">
                        <img className="img-fluid" src={Employee} />
                      </div>
                    </div>

                    <div className="col-md-9 col-lg-9 col-xl-9 col-xxl-9 p-0">
                      <h4 className="fs-5 text-left fw-bold mt-1">
                        Employee NPS
                      </h4>
                      <div className="text-secondary font-12">
                        Play A Better Role As An Employer By Managing <br />
                        National Pention Scheme For Your Employees In <br />
                        Simple Steps.
                      </div>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 col-xxl-1 p-0">
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
                    <div className="col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                      <div className="bg-lightpurple rounded-15 p-2 mt-2">
                        <img className="img-fluid" src={Financial} />
                      </div>
                    </div>

                    <div className="col-md-9 col-lg-9 col-xl-9 col-xxl-9 p-0">
                      <h4 className="fs-5 text-left fw-bold mt-1">
                        Smart Financial Services
                      </h4>
                      <div className="text-secondary font-12">
                        Upload Your Bank Statements And Get To Know <br />
                        What Amount Of Money Could Be Saved, What <br />
                        Can Be The Next Best Decision.{" "}
                      </div>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 col-xxl-1 p-0">
                      <input
                        className="form-check-input mt-3 cardCheckbox"
                        type="checkbox"
                        value=""
                        aria-label="..."
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center ml-auto mr-auto mt-4 mb-25">
                  <button
                    type="button"
                    className="btn-darkblue btn-lg mt-4 text-white fs-6 fw-bold p-3"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 d-md-none d-lg-none d-xl-none d-xxl-none">
          <div className="container p-0 m-0">
            <div className="card shadow p-3 bg-grey border-0">
              <h3 className="fw-bold text-left mb-4 fs-5">
                <span>
                  <img className="img-fluid arrowLeft" src={ArrowLeft} /> &nbsp;
                </span>
                Select Services
              </h3>
              <p className="fs-6 fw-bold">
                Please Select The Service You Want To Apply
              </p>

              <div className="card border-0 shadow bg-white rounded-15 p-3">
                <div className="row">
                  <div className="col-2 col-sm-2">
                    <div className="bg-lightpink rounded-15 p-2 mt-2">
                      <img className="img-fluid" src={Card} />
                    </div>
                  </div>

                  <div className="col-9 col-sm-9 p-0">
                    <p className="fs-6 text-left fw-bold mt-1 mb-0">
                      De'tax Card
                    </p>
                    <div className="text-secondary font-10">
                      Increase Employee Take Home Salary Without An <br />
                      Increase In CTC. Yes! That's Possible. Start Now.
                    </div>
                  </div>
                  <div className="col-1 col-sm-1 p-0">
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
                    <div className="bg-lightblue rounded-15 p-2 mt-2">
                      <img className="img-fluid" src={Employee} />
                    </div>
                  </div>

                  <div className="col-9 col-sm-9 p-0">
                    <p className="fs-6 text-left fw-bold mt-1 mb-0">
                      Employee NPS
                    </p>
                    <div className="text-secondary font-10">
                      Play A Better Role As An Employer By Managing <br />
                      National Pention Scheme For Your Employees In <br />
                      Simple Steps.
                    </div>
                  </div>
                  <div className="col-1 col-sm-1 p-0">
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
                    <div className="bg-lightpurple rounded-15 p-2 mt-2">
                      <img className="img-fluid" src={Financial} />
                    </div>
                  </div>

                  <div className="col-9 col-sm-2 p-0">
                    <p className="fs-6 text-left fw-bold mt-1 mb-0">
                      Smart Financial Services
                    </p>
                    <div className="text-secondary font-10">
                      Upload Your Bank Statements And Get To Know <br />
                      What Amount Of Money Could Be Saved, What <br />
                      Can Be The Next Best Decision.
                    </div>
                  </div>
                  <div className="col-1 col-sm-1 p-0">
                    <input
                      className="form-check-input mt-3 cardCheckbox"
                      type="checkbox"
                      value=""
                      aria-label="..."
                    />
                  </div>
                </div>
              </div>

              <div className="text-center ml-auto mr-auto mb-50 mt-5">
                <button
                  type="button"
                  className="btn-darkblue btn-lg mt-2 text-white fw-bold p-3 fs-6"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page9;
