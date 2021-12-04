import React from "react";

import Image1 from "../../../../public/images/bg-1.svg";
const Building = "/images/icons/building.svg";
const Page1 = () => {
  return (
    <div>
      <div className="container p-0">
        <div className="row">
          <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block col-lg-8 col-md-6 ">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mx-auto image-class">
              <img
                className="img-fluid"
                width="791"
                height="741"
                src={Image1}
                alt="image"
              />
            </div>
            <div className="textDetail mt-5">
              <h5 className="text-black fw-bold mb-3 mt-85">Lorem ipsum</h5>
              <p className="fw-bolder text-grey">
                Lorem ipsum is a placeholder text commonly used to demonstrate{" "}
                <br />
                the visual form of a document or a typeface without relying on{" "}
                <br />
                meaningful content.
              </p>
            </div>
          </div>
          <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block col-lg-4  col-md-6 mt-4">
            <div className="container p-0 m-0">
              <div className="card shadow p-3 bg-grey rounded-15 border-0">
                <h1 className="font-weight-bold text-center mb-4 heading mt-120">
                  Great Start!
                </h1>
                <p className="d-none d-sm-none text-center mb-0 fw-bold text-black">
                  Lorem ipsum is a placeholder text commonly <br />
                  used to demonstrate
                </p>
                <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block text-center">
                  <div className="input-group mb-3 rounded-15 ml-auto mr-auto p-2">
                    <span className="input-group-text" id="basic-addon1">
                      <div className="imageBackground">
                        {" "}
                        <img className="img-fluid icons" src={Building} />
                      </div>
                    </span>
                    <input
                      type="text"
                      className="form-control input-field p-2"
                      placeholder="Enter your Company Name / CIN"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <span className="text-center fw-bold text-lightblue">
                    We just need this to make your onboarding <br />
                    hassle free.
                  </span>
                </div>

                <div className="text-center ml-auto mr-auto mt-5 mb-50">
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
              <div className="image-class d-md-none d-lg-none d-xl-none d-xxl-none">
                <img
                  className="img-fluid"
                  width="791"
                  height="741"
                  src={Image1}
                  alt="image"
                />
              </div>
              <h1 className="fw-bold text-center mb-4 heading fs-5 mt-3">
                Great Start!
              </h1>
              <p className="d-md-none d-lg-none d-xl-none d-xxl-none text-center mb-0 fw-bold text-black fs-small">
                Lorem ipsum is a placeholder text commonly <br />
                used to demonstrate
              </p>

              <div className="card shadow inputCard p-3 mt-4 mb-4 d-md-none d-lg-none d-xl-none d-xxl-none">
                <div className="input-group p-1 rounded-15 ml-auto mr-auto border-grey">
                  <span className="input-group-text w-25" id="basic-addon1">
                    <div className="imageBackground p-1">
                      {" "}
                      <img className="img-fluid icons w-50" src={Building} />
                    </div>
                  </span>
                  <input
                    type="text"
                    className="form-control input-field p-2"
                    placeholder="Enter your Company Name / CIN"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <span className="text-center mt-2 fw-bold text-black fs-small">
                  We just need this to make your onboarding <br />
                  hassle free.
                </span>
              </div>

              <div className="text-center ml-auto mr-auto mb-5">
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

export default Page1;
