import React from 'react'

const Location = () => {
  return (
    <>
 
    <div className="d-none">
      <div className="bg-primary border-bottom p-3 d-flex align-items-center mb-4">
        <a className="toggle togglew toggle-2" href="#">
          <span />
        </a>
        <h4 className="fw-bold m-0 text-white">Location</h4>
      </div>
    </div>
    <div className="location-page container">
      <div className="d-flex align-items-center justify-content-center flex-column py-5">
        <img alt="#" src="img/location.png" className="img-fluid" />
        <div className="px-4 text-center mt-4">
          <h5 className="text-dark">Hi, nice to meet you!</h5>
          <p className="mb-5">
            Choose your location to start find restaurants around you.
          </p>
          <a href="home.html" className="btn btn-lg btn-primary w-100 my-4">
            <i className="feather-navigation" /> Use current location
          </a>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default Location
