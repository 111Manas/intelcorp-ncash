import React from "react";
import Image3 from "../../assets/images/bg-3.png";
import ArrowLeft from "../../assets/images/arrow-left-short.svg";
import Edit from "../../assets/images/edit.svg";
const Page4 = () => {
  return (
    <div>
      <div className="container p-0">
        <div className="row">
          <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block col-md-6 col-lg-7 col-xl-8 col-xxl-8">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 mx-auto image-class">
              <img
                className="img-fluid"
                width="687"
                height="707"
                src={Image3}
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
          <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block col-md-6 col-lg-5 col-xl-4 col-xxl-4 mt-4">
            <div className="container p-0 m-0">
              <div className="card shadow p-3 bg-grey rounded-15 border-0 mb-5">
                <h3 className="fw-bold text-left mb-4 subheading">
                  <span>
                    <img className="img-fluid arrowLeft" src={ArrowLeft} />{" "}
                    &nbsp;
                  </span>
                  User Verification
                </h3>
                <p className="cardtitle text-center fw-bold mt-5">
                  Verification OTP
                </p>
                <span className="text-center fw-bold text-black mt-3 mb-2">
                  We Have Sent The Code Verification To Your <br />
                  E-mail Address
                </span>
                <span className="text-center fw-bold text-black mb-2 fs-5">
                  example@gmail.com &nbsp;
                  <button
                    className="bg-white border-0 editButton p-0 rounded shadow w-7"
                    type="button"
                  >
                    <img className="img-fluid w-50" src={Edit} />
                  </button>
                </span>
                <div
                  id="otp"
                  className="inputs d-flex flex-row justify-content-center mt-2 mb-2"
                >
                  {" "}
                  <input
                    className="m-1 text-center form-control rounded"
                    type="text"
                    id="first"
                  />{" "}
                  <input
                    className="m-1 text-center form-control rounded"
                    type="text"
                    id="second"
                  />{" "}
                  <input
                    className="m-1 text-center form-control rounded"
                    type="text"
                    id="third"
                  />{" "}
                  <input
                    className="m-1 text-center form-control rounded"
                    type="text"
                    id="fourth"
                  />{" "}
                  <input
                    className="m-1 text-center form-control rounded"
                    type="text"
                    id="fifth"
                  />{" "}
                  <input
                    className="m-1 text-center form-control rounded"
                    type="text"
                    id="sixth"
                  />
                  <span className="text-red mt-2">00:25</span>
                </div>
                <p className="fw-bolder text-secondary text-center mb-0 mt-1">
                  Didn't receive Verification Code?
                </p>
                <p className="fw-bolder text-lightblue text-center">
                  Resend Code
                </p>

                <div className="text-center ml-auto mr-auto mt-4 mb-50">
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
        {/* <div className="col-md-12 d-md-none d-lg-none d-xl-none d-xxl-none">
            <div className="container p-0 m-0">
            <div className="card shadow p-3 bg-grey border-0">
            <h3 className="fw-bold text-left mb-4 fs-5"><span>&lt; &nbsp;</span>User Verification</h3>
         <div className="image-class d-md-none d-lg-none d-xl-none d-xxl-none">
                <img className="img-fluid" src={Image3} alt="image"/>
            </div>
                
           
                
                <div className="card shadow inputCard p-2 mt-4 mb-4 d-md-none d-lg-none d-xl-none d-xxl-none">
                <p className="cardtitle text-center fw-bold mb-0">Verification OTP</p>
                <span className="text-center fw-bold text-black fs-small mt-2 mb-2">We Have Sent The Code Verification To Your <br/>Mobile Number</span>
                <span className="text-center fw-bold text-black mb-2 fs-5">+91-3813881309 &nbsp;
                    <button className="bg-white border-0 editButton p-0 rounded shadow w-7" type="button"><img className="img-fluid w-50" src={Edit}/></button>
                </span>
                <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2 mb-2"> <input className="m-1 text-center form-control rounded" type="text" id="first"  /> <input className="m-1 text-center form-control rounded" type="text" id="second" /> <input className="m-1 text-center form-control rounded" type="text" id="third" /> <input className="m-1 text-center form-control rounded" type="text" id="fourth" /> <input className="m-1 text-center form-control rounded" type="text" id="fifth" /> <input className="m-1 text-center form-control rounded" type="text" id="sixth" /> 
               
                </div>

                <span className="text-center fw-bold text-black mb-2 fs-5">example@gmail.com &nbsp;
                    <button className="bg-white border-0 editButton p-0 rounded shadow w-7" type="button"><img className="img-fluid w-50" src={Edit}/></button>
                </span>
                <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2 mb-2"> <input className="m-1 text-center form-control rounded" type="text" id="first"  /> <input className="m-1 text-center form-control rounded" type="text" id="second" /> <input className="m-1 text-center form-control rounded" type="text" id="third" /> <input className="m-1 text-center form-control rounded" type="text" id="fourth" /> <input className="m-1 text-center form-control rounded" type="text" id="fifth" /> <input className="m-1 text-center form-control rounded" type="text" id="sixth" /> 
               
                </div> 
                <p className="fs-small fw-bolder text-secondary text-center mb-0 mt-1">Didn't receive Verification Code?</p>
                <span className="d-flex justify-content-center mb-2"><span className="fs-6 fw-bolder text-lightblue text-center mt-1">Resend Code</span> &nbsp;&nbsp; <span className="text-red mt-1 fs-6">00:25</span></span>
               
               
                </div>
              
                <div className="text-center ml-auto mr-auto mb-5">
                    <button type="button" className="btn-darkblue btn-lg mt-2 text-white fw-bold p-3 fs-6">Continue</button>
                </div>
                
            </div>
            </div>
        </div>
        </div> */}
      </div>
    </div>
  );
};

export default Page4;
