import { BackButton, Button, Heading } from "..";

import React from "react";

const Image11 = "/images/bg-11.png";

const DigitalContractReview = () => {
  return (
    <div>
      <div className="container p-0">
        <div className="row">
          <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block col-md-6 col-lg-7 col-xl-8 col-xxl-8">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mx-auto image-class">
              <img
                className="img-fluid"
                width="948"
                height="707"
                src={process.env.PUBLIC_URL + Image11}
                alt="Mobile"
              />
            </div>
            <div className="textDetail mt-4">
              <h5 className="text-black fw-bold mb-3 mt-120">Lorem ipsum</h5>
              <p className="fw-bolder text-secondary">
                Lorem ipsum is a placeholder text commonly used to demonstrate{" "}
                <br />
                the visual form of a document or a typeface without relying on{" "}
                <br />
                meaningful content.
              </p>
            </div>
          </div>
          <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block col-md-6 col-lg-5 col-xl-4 col-xxl-4 mt-4">
            <div className="container p-0 m-0">
              <div className="card shadow p-3 bg-grey rounded-15 border-0 mb-5">
                <BackButton text="Digital Contract" />
                <Heading className="text-center mt-4" text="" variant="large" />
                <p className="fs-5">Board Resolution Sent!</p>
                <p className="ncash_sub-text">
                  We Have Sent A Board Resolution To The <br />
                  Authorized Signatories Of The Company.
                  <br />
                  Same Needs To Be Digitally Signed.
                </p>
                <div className="card border-0 shadow bg-white rounded-15 p-3">
                  <div className="row">
                    <div className="col-9 pe-0">
                      <div className="row">
                        <div className="col-5 pe-0">
                          <div className="fs-6 text-left mt-1 fw-bold">
                            BR Sent On{" "}
                          </div>
                        </div>
                        <div className="col-1 p-0 mt-1">:</div>
                        <div className="col-6">
                          <div className="fs-6 text-left mt-1 fw-bolder">
                            11/10/2021
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-5">
                          <div className="fs-6 fw-bold">Status</div>
                        </div>
                        <div className="col-1 p-0">:</div>
                        <div className="col-6 pe-0">
                          <div className="fs-6 text-secondary text-warning fw-bolder">
                            Under Review
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <Button className="btn-darkblue p-1 mx-auto my-auto w-100 font-12 text-white mt-2">
                        View
                      </Button>
                    </div>
                  </div>
                </div>
                <p className="fs-5 mt-3 fw-bold">BR Send To</p>
                <div className="row">
                  <div className="col-8">
                    <div className="font-14 fw-bold">Brahma Chauhan</div>
                    <div className="font-12">brahma@rocketflyer.in</div>
                    <div className="font-12">+91-8938913813</div>
                  </div>
                  <div className="col-4">
                    <div className="text-lightblue font-12 fw-bold d-flex justify-content-end">
                      Director
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-8">
                    <div className="font-14 fw-bold">Gaurav Aggarwal</div>
                    <div className="font-12">brahma@rocketflyer.in</div>
                    <div className="font-12">+91-8938913813</div>
                  </div>
                  <div className="col-4">
                    <div className="text-lightblue font-12 fw-bold d-flex justify-content-end">
                      Manager
                    </div>
                  </div>
                </div>
                <div className="row mt-4 mb-25">
                  <div className="col-8">
                    <div className="font-14 fw-bold">Praveen Kumar</div>
                    <div className="font-12">brahma@rocketflyer.in</div>
                    <div className="font-12">+91-8938913813</div>
                  </div>
                  <div className="col-4">
                    <div className="text-lightblue font-12 fw-bold d-flex justify-content-end">
                      Team Head
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 d-md-none d-lg-none d-xl-none d-xxl-none">
        <div className="container p-0 m-0">
          <div className="shadow bg-grey border-0">
            <BackButton text="Digital Contract" />

            <p className="fs-6 fw-bold ps-3 pe-3 pt-3">
              Board Resolution Sent!
            </p>
            <div className="row ms-3 me-3">
              <div className="col-7 col-sm-7 p-0">
                <p className="fs-small">
                  We Have Sent A Board Resolution To The Authorized Signatories
                  Of The Company. Same Needs To Be Digitally Signed.
                </p>
              </div>

              <div className="col-5 col-sm-5 ">
                <img
                  className="img-fluid"
                  width="948"
                  height="707"
                  src={process.env.PUBLIC_URL + Image11}
                  alt="Mobile"
                />
              </div>
            </div>
            <div className="card border-0 shadow bg-white rounded-15 p-2 ms-3 me-3  Top-25 Absolute-width z-2">
              <div className="row">
                <div className="col-9">
                  <div className="row">
                    <div className="col-5">
                      <div className="fs-small text-left mt-1">BR Sent On </div>
                    </div>
                    <div className="col-1 p-0">:</div>
                    <div className="col-6">
                      <div className="font-14 text-left mt-1">11/10/2021</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-5">
                      <div className="font-14">Status</div>
                    </div>
                    <div className="col-1 p-0">:</div>
                    <div className="col-6">
                      <div className="text-secondary font-14 text-warning">
                        Under Review
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <Button className="btn-darkblue p-1 mx-auto my-auto w-100 ncash_btn-let-start shadow text-white mt-2">
                    View
                  </Button>
                </div>
              </div>
            </div>
            <div className="card border-0 shadow bg-white rounded-30 p-3 mt-1 positin-relative">
              <p className="fs-5 mt-3 fw-bold mt-4">BR Send To</p>
              <div className="row">
                <div className="col-8">
                  <div className="font-14 fw-bold">Brahma Chauhan</div>
                  <div className="font-12">brahma@rocketflyer.in</div>
                  <div className="font-12">+91-8938913813</div>
                </div>
                <div className="col-4">
                  <div className="text-lightblue font-12 fw-bold d-flex justify-content-end">
                    Director
                  </div>
                </div>
              </div>
              <hr className="ms-1 me-1" />
              <div className="row">
                <div className="col-8">
                  <div className="font-14 fw-bold">Gaurav Aggarwal</div>
                  <div className="font-12">brahma@rocketflyer.in</div>
                  <div className="font-12">+91-8938913813</div>
                </div>
                <div className="col-4">
                  <div className="text-lightblue font-12 fw-bold d-flex justify-content-end">
                    Manager
                  </div>
                </div>
              </div>
              <hr className="ms-1 me-1" />
              <div className="row mb-50">
                <div className="col-8">
                  <div className="font-14 fw-bold">Praveen Kumar</div>
                  <div className="font-12">brahma@rocketflyer.in</div>
                  <div className="font-12">+91-8938913813</div>
                </div>
                <div className="col-4">
                  <div className="text-lightblue font-12 fw-bold d-flex justify-content-end">
                    Team Head
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalContractReview;
