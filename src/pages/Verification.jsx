import React from 'react'

const Verification = () => {
  return (
<>
  <div className="osahan-signup login-page">
    {/* <video loop="" autoPlay="" muted="" id="vid">
      <source src="img/bg.mp4" type="video/mp4" />
      <source src="img/bg.mp4" type="video/ogg" />
      Your browser does not support the video tag.
    </video> */}
    <div className="d-flex align-items-center justify-content-center flex-column vh-100">
      <div className="px-5 col-md-6 ms-auto">
        <div className="px-5 col-10 mx-auto mb-4">
          <h2 className="mb-3">Verify your phone number</h2>
          <h6 className="text-black-50">Enter your OTP code here</h6>
          <form action="home.html">
            <div className="row my-5 mx-0 otp">
              <div className="col pe-1 ps-0">
                <input
                  type="text"
                  defaultValue={4}
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col px-2">
                <input
                  type="text"
                  defaultValue={0}
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col px-2">
                <input
                  type="text"
                  defaultValue={8}
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col ps-1 pe-0">
                <input
                  type="text"
                  defaultValue={0}
                  className="form-control form-control-lg"
                />
              </div>
            </div>
            <button className="btn btn-lg btn-primary w-100">Verify Now</button>
          </form>
        </div>
        <div className="new-acc d-flex align-items-center justify-content-center">
          <a href="login.html">
            <p className="text-center m-0">Already an account? Sign in</p>
          </a>
        </div>
      </div>
    </div>
  </div>

</>

  )
}

export default Verification
