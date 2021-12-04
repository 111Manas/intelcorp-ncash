import { Button, CardButton, Heading, MediumScreen, SmallScreen } from "..";

import React from "react";
import { RoutePaths } from "../../router";
import { useNavigate } from "react-router-dom";

const Image1 = "/images/bg-3.png";

const UserVerificationPage = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(RoutePaths.CompanyDetails);
  };
  const goBack = () => {
    navigate(-1);
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
                  src={process.env.PUBLIC_URL + Image1}
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
                  <h2 className="fw-bold">User Verification</h2>
                  <Heading
                    className="text-center mt-85"
                    text="OTP Verification"
                    variant="large"
                  />
                  <span className="text-center fw-bold text-black mt-3 mb-2">
                    We have sent the code verification to your <br />
                    mobile number & e-mail address
                  </span>
                  <span className="text-center fw-bold text-black mb-2 mt-4  fs-5">
                    +91-3813881309 &nbsp;
                    <CardButton icon={"edit"} onClick={goBack} />
                  </span>

                  <div
                    id="otp"
                    className="inputs d-flex flex-row justify-content-center mt-2 mb-2"
                  >
                    {" "}
                    <input
                      className="m-1 text-center form-control rounded ncash_otp-input"
                      type="text"
                      id="first"
                    />{" "}
                    <input
                      className="m-1 text-center form-control rounded ncash_otp-input"
                      type="text"
                      id="second"
                    />{" "}
                    <input
                      className="m-1 text-center form-control rounded ncash_otp-input"
                      type="text"
                      id="third"
                    />
                  </div>
                  <span className="text-center fw-bold text-black mb-2 fs-5">
                    example@gmail.com &nbsp;
                    <CardButton icon={"edit"} onClick={goBack} />
                  </span>
                  <div
                    id="otp"
                    className="inputs d-flex flex-row justify-content-center mt-2 mb-2"
                  >
                    {" "}
                    <input
                      className="m-1 text-center form-control rounded ncash_otp-input"
                      type="text"
                      id="first"
                    />{" "}
                    <input
                      className="m-1 text-center form-control rounded ncash_otp-input"
                      type="text"
                      id="second"
                    />{" "}
                    <input
                      className="m-1 text-center form-control rounded ncash_otp-input"
                      type="text"
                      id="third"
                    />{" "}
                  </div>
                  <p className="fw-bolder text-secondary text-center mb-0 mt-1">
                    Didn't receive Verification Code?
                  </p>
                  <p className="fw-bolder text-lightblue text-center">
                    Resend Code <span className="text-danger mt-2">00:25</span>
                  </p>
                  <div className="text-center ml-auto mr-auto mt-5 mb-50">
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
                <h2 className="fw-bold">User Verification</h2>
                <div className="image-class d-md-none d-lg-none d-xl-none d-xxl-none">
                  <img
                    className="img-fluid"
                    width="791"
                    height="741"
                    src={process.env.PUBLIC_URL + Image1}
                    alt="BG"
                  />
                </div>

                <div className="card shadow inputCard p-3 mt-4 mb-4 d-md-none d-lg-none d-xl-none d-xxl-none">
                  <Heading
                    className="text-center mt-2"
                    text="OTP Verification"
                    variant="small"
                  />
                  <span className="text-center fs-small fw-bold text-black mt-1 mb-2">
                    We have sent the code verification to your mobile number &
                    e-mail address
                  </span>
                  <span className="text-center fw-bold text-black mb-2 fs-5">
                    +91-3813881309 &nbsp;
                    <CardButton icon={"edit"} onClick={goBack} />
                  </span>

                  <div
                    id="otp"
                    className="inputs d-flex flex-row justify-content-center mt-2 mb-2"
                  >
                    {" "}
                    <input
                      className="m-1 text-center form-control rounded ncash_otp-input"
                      type="text"
                      id="first"
                    />{" "}
                    <input
                      className="m-1 text-center form-control rounded ncash_otp-input"
                      type="text"
                      id="second"
                    />{" "}
                    <input
                      className="m-1 text-center form-control rounded ncash_otp-input"
                      type="text"
                      id="third"
                    />
                  </div>
                  <span className="text-center fw-bold text-black mb-2 fs-5">
                    example@gmail.com &nbsp;
                    <CardButton icon={"edit"} onClick={goBack} />
                  </span>
                  <div
                    id="otp"
                    className="inputs d-flex flex-row justify-content-center mt-2 mb-2"
                  >
                    {" "}
                    <input
                      className="m-1 text-center form-control rounded ncash_otp-input"
                      type="text"
                      id="first"
                    />{" "}
                    <input
                      className="m-1 text-center form-control rounded ncash_otp-input"
                      type="text"
                      id="second"
                    />{" "}
                    <input
                      className="m-1 text-center form-control rounded ncash_otp-input"
                      type="text"
                      id="third"
                    />{" "}
                  </div>
                  <p className="fw-bolder text-secondary text-center mb-0 mt-1">
                    Didn't receive Verification Code?
                  </p>
                  <p className="fw-bolder text-lightblue text-center">
                    Resend Code <span className="text-danger mt-2">00:25</span>
                  </p>
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

export default UserVerificationPage;
