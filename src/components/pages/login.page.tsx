import { Button, Heading, InputGroup, MediumScreen, SmallScreen } from "..";
import { Link, useNavigate } from "react-router-dom";

import React from "react";
import { RoutePaths } from "../../router";

const Image3 = "/images/bg-3.png";

const LoginDetailsPage = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(RoutePaths.UserVerification);
  };
  return (
    <>
      <div className="container p-0">
        <div className="row">
          <div className="col-lg-8 col-md-6 ">
            <MediumScreen>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mx-auto image-class">
                <img
                  className="img-fluid"
                  width="791"
                  height="741"
                  src={process.env.PUBLIC_URL + Image3}
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
                  meaningful content.
                </p>
              </div>
            </MediumScreen>
          </div>
          <div className="mt-4  col-lg-4  col-md-6">
            <MediumScreen>
              <div className="container p-0 m-0">
                <div className="card shadow p-3 bg-grey rounded-15 border-0">
                  <Heading
                    className="text-center mt-120"
                    text="Log In"
                    variant="large"
                  />
                  <p className="d-none d-sm-none d-md-block text-center mb-0 fw-bold text-black mt-4 mb-4">
                    Lorem ipsum is a placeholder text commonly <br />
                    used to demonstrate
                  </p>
                  <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block text-center">
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
                  </div>
                  <div className="text-center ml-auto mr-auto mb-5 mt-5">
                    <Button type="button" onClick={handleSubmit}>
                      Continue
                    </Button>
                  </div>
                  <p className="fw-bolder text-secondary text-center mb-5 mt-1">
                    Not having an account!
                    <Link className="ncash_nav-link" to={RoutePaths.SignUp}>
                      Sign Up
                    </Link>{" "}
                    Now
                  </p>
                </div>
              </div>
            </MediumScreen>
          </div>
        </div>

        <div className="col-md-12">
          <SmallScreen>
            <div className="container p-0 m-0">
              <div className="card shadow p-3 bg-grey border-0">
                <div className="image-class d-md-none d-lg-none d-xl-none d-xxl-none">
                  <img
                    className="img-fluid"
                    width="791"
                    height="741"
                    src={process.env.PUBLIC_URL + Image3}
                    alt="BG"
                  />
                </div>
                <h1 className="fw-bold text-center mb-4 heading fs-5 mt-3">
                  Log In
                </h1>
                <p className="d-md-none d-lg-none d-xl-none d-xxl-none text-center mb-0 fw-bold text-black fs-small">
                  Lorem ipsum is a placeholder text commonly <br />
                  used to demonstrate
                </p>
                <div className="card shadow inputCard p-3 mt-4 mb-4 d-md-none d-lg-none d-xl-none d-xxl-none">
                  <InputGroup
                    icon="phone"
                    type="text"
                    className="form-control input-field p-2"
                    placeholder="Mobile No"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <span className="text-center mt-2 fw-bold text-black fs-small">
                    We just need this to make your onboarding <br />
                    hassle free.
                  </span>
                </div>
                <div className="text-center ml-auto mr-auto mb-5">
                  <Button type="button" onClick={handleSubmit}>
                    Continue
                  </Button>
                </div>
                <p className="fw-bolder text-secondary text-center  mt-1 ">
                  Not having an account!
                  <Link className="ncash_nav-link" to={RoutePaths.SignUp}>
                    Sign Up
                  </Link>{" "}
                  Now
                </p>
              </div>
            </div>
          </SmallScreen>
        </div>
      </div>
    </>
  );
};

export default LoginDetailsPage;
