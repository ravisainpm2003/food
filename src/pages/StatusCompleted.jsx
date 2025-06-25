import React from 'react'

const StatusCompleted = () => {
  return (
    <div>
      <>

  <div className="d-none">
    <div className="bg-primary p-3 d-flex align-items-center">
      <a className="toggle togglew toggle-2" href="#">
        <span />
      </a>
      <h4 className="fw-bold m-0 text-white">My Order</h4>
    </div>
  </div>
  <div className="py-4 osahan-main-body">
    <div className="container">
      <div className="row g-4">
        <div className="col-md-3">
          <ul
            className="nav nav-tabsa custom-tabsa border-0 flex-column bg-white rounded overflow-hidden shadow-sm p-2 c-t-order"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <a
                className="nav-link border-0 text-dark py-3 active"
                href="my_order.html"
              >
                <i className="feather-check me-2 text-success mb-0" /> Completed
              </a>
            </li>
            <li className="nav-item border-top" role="presentation">
              <a
                className="nav-link border-0 text-dark py-3"
                href="my_order.html"
              >
                <i className="feather-clock me-2 text-warning mb-0" /> On
                Progress
              </a>
            </li>
            <li className="nav-item border-top" role="presentation">
              <a
                className="nav-link border-0 text-dark py-3"
                href="my_order.html"
              >
                <i className="feather-x-circle me-2 text-danger mb-0" />{" "}
                Canceled
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-9">
          {/* body */}
          <section className="bg-white osahan-main-body rounded shadow-sm overflow-hidden">
            <div className="container p-0">
              <div className="row">
                <div className="col-lg-12">
                  <div className="osahan-status">
                    {/* status complete */}
                    <div className="p-3 status-order bg-white border-bottom d-flex align-items-center">
                      <p className="m-0">
                        <i className="feather-calendar text-primary" /> 16 June,
                        11:30AM
                      </p>
                      <a
                        href="review.html"
                        className="text-primary ms-auto text-decoration-none"
                      >
                        Review
                      </a>
                    </div>
                    <div className="p-3 border-bottom">
                      <h6 className="fw-bold">Order Status</h6>
                      <div className="tracking-wrap">
                        <div className="my-1 step active">
                          <span className="icon text-success">
                            <i className="feather-check" />
                          </span>
                          <span className="text small">Preparing order</span>
                        </div>
                        {/* step.// */}
                        <div className="my-1 step active">
                          <span className="icon text-success">
                            <i className="feather-check" />
                          </span>
                          <span className="text small"> Ready to collect</span>
                        </div>
                        {/* step.// */}
                        <div className="my-1 step">
                          <span className="icon text-success">
                            <i className="feather-check" />
                          </span>
                          <span className="text small"> On the way </span>
                        </div>
                        {/* step.// */}
                        <div className="my-1 step">
                          <span className="icon text-success">
                            <i className="feather-check" />
                          </span>
                          <span className="text small">Delivered Order</span>
                        </div>
                        {/* step.// */}
                      </div>
                    </div>
                    {/* Destination */}
                    <div className="p-3 border-bottom bg-white">
                      <h6 className="fw-bold">Destination</h6>
                      <p className="m-0 small">
                        554 West 142nd Street, New York, NY 10031
                      </p>
                    </div>
                    <div className="p-3 border-bottom">
                      <p className="fw-bold small mb-1">Courier</p>
                      <img
                        alt="#"
                        src="img/logo_web.png"
                        className="img-fluid sc-osahan-logo me-2"
                      />{" "}
                      <span className="small text-primary fw-bold">
                        Grocery Courier
                      </span>
                    </div>
                    {/* total price */}
                    {/* Destination */}
                    <div className="p-3 bg-white">
                      <div className="d-flex align-items-center mb-2">
                        <h6 className="fw-bold mb-1">Total Cost</h6>
                        <h6 className="fw-bold ms-auto mb-1">$8.52</h6>
                      </div>
                      <p className="m-0 small text-muted">
                        You can check your order detail here,
                        <br />
                        Thank you for order.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  {/* footer */}
  <footer className="section-footer border-top bg-dark">
    <div className="container">
      <div className="footer-top padding-y py-5">
        <div className="row pt-3">
          <aside className="col-md-4 footer-about">
            <article className="d-flex pb-3">
              <div>
                <img
                  alt="#"
                  src="img/logo_web.png"
                  className="logo-footer me-3"
                />
              </div>
              <div>
                <h6 className="title text-white">About Us</h6>
                <p className="text-muted">
                  Some short text about company like You might remember the Dell
                  computer commercials in which a youth reports.
                </p>
                <div className="d-flex align-items-center">
                  <a
                    className="btn btn-icon btn-outline-light me-1 btn-sm"
                    title="Facebook"
                    target="_blank"
                    href="#"
                  >
                    <i className="feather-facebook" />
                  </a>
                  <a
                    className="btn btn-icon btn-outline-light me-1 btn-sm"
                    title="Instagram"
                    target="_blank"
                    href="#"
                  >
                    <i className="feather-instagram" />
                  </a>
                  <a
                    className="btn btn-icon btn-outline-light me-1 btn-sm"
                    title="Youtube"
                    target="_blank"
                    href="#"
                  >
                    <i className="feather-youtube" />
                  </a>
                  <a
                    className="btn btn-icon btn-outline-light me-1 btn-sm"
                    title="Twitter"
                    target="_blank"
                    href="#"
                  >
                    <i className="feather-twitter" />
                  </a>
                </div>
              </div>
            </article>
          </aside>
          <aside className="col-sm-3 col-md-2 text-white">
            <h6 className="title">Error Pages</h6>
            <ul className="list-unstyled hov_footer">
              <li>
                {" "}
                <a href="not-found.html" className="text-muted">
                  Not found
                </a>
              </li>
              <li>
                {" "}
                <a href="maintence.html" className="text-muted">
                  Maintence
                </a>
              </li>
              <li>
                {" "}
                <a href="coming-soon.html" className="text-muted">
                  Coming Soon
                </a>
              </li>
            </ul>
          </aside>
          <aside className="col-sm-3 col-md-2 text-white">
            <h6 className="title">Services</h6>
            <ul className="list-unstyled hov_footer">
              <li>
                {" "}
                <a href="faq.html" className="text-muted">
                  Delivery Support
                </a>
              </li>
              <li>
                {" "}
                <a href="contact-us.html" className="text-muted">
                  Contact Us
                </a>
              </li>
              <li>
                {" "}
                <a href="terms.html" className="text-muted">
                  Terms of use
                </a>
              </li>
              <li>
                {" "}
                <a href="privacy.html" className="text-muted">
                  Privacy policy
                </a>
              </li>
            </ul>
          </aside>
          <aside className="col-sm-3  col-md-2 text-white">
            <h6 className="title">For users</h6>
            <ul className="list-unstyled hov_footer">
              <li>
                {" "}
                <a href="login.html" className="text-muted">
                  {" "}
                  User Login{" "}
                </a>
              </li>
              <li>
                {" "}
                <a href="signup.html" className="text-muted">
                  {" "}
                  User register{" "}
                </a>
              </li>
              <li>
                {" "}
                <a href="forgot_password.html" className="text-muted">
                  {" "}
                  Forgot Password{" "}
                </a>
              </li>
              <li>
                {" "}
                <a href="profile.html" className="text-muted">
                  {" "}
                  Account Setting{" "}
                </a>
              </li>
            </ul>
          </aside>
          <aside className="col-sm-3  col-md-2 text-white">
            <h6 className="title">More Pages</h6>
            <ul className="list-unstyled hov_footer">
              <li>
                {" "}
                <a href="trending.html" className="text-muted">
                  {" "}
                  Trending{" "}
                </a>
              </li>
              <li>
                {" "}
                <a href="most_popular.html" className="text-muted">
                  {" "}
                  Most popular{" "}
                </a>
              </li>
              <li>
                {" "}
                <a href="restaurant.html" className="text-muted">
                  {" "}
                  Restaurant Details{" "}
                </a>
              </li>
              <li>
                {" "}
                <a href="favorites.html" className="text-muted">
                  {" "}
                  Favorites{" "}
                </a>
              </li>
            </ul>
          </aside>
        </div>
        {/* row.// */}
      </div>
      {/* footer-top.// */}
      <section className="footer-center border-top padding-y py-5">
        <h6 className="title text-white">Countries</h6>
        <div className="row">
          <aside className="col-sm-2 col-md-2 text-white">
            <ul className="list-unstyled hov_footer">
              <li>
                {" "}
                <a href="#" className="text-muted">
                  India
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Indonesia
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Ireland
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Italy
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Lebanon
                </a>
              </li>
            </ul>
          </aside>
          <aside className="col-sm-2 col-md-2 text-white">
            <ul className="list-unstyled hov_footer">
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Malaysia
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  New Zealand
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Philippines
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Poland
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Portugal
                </a>
              </li>
            </ul>
          </aside>
          <aside className="col-sm-2 col-md-2 text-white">
            <ul className="list-unstyled hov_footer">
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Australia
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Brasil
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Canada
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Chile
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Czech Republic
                </a>
              </li>
            </ul>
          </aside>
          <aside className="col-sm-2 col-md-2 text-white">
            <ul className="list-unstyled hov_footer">
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Turkey
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  UAE
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  United Kingdom
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  United States
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Sri Lanka
                </a>
              </li>
            </ul>
          </aside>
          <aside className="col-sm-2 col-md-2 text-white">
            <ul className="list-unstyled hov_footer">
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Qatar
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Singapore
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Slovakia
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  South Africa
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Green Land
                </a>
              </li>
            </ul>
          </aside>
          <aside className="col-sm-2 col-md-2 text-white">
            <ul className="list-unstyled hov_footer">
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Pakistan
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Bangladesh
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Bhutaan
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="text-muted">
                  Nepal
                </a>
              </li>
            </ul>
          </aside>
        </div>
        {/* row.// */}
      </section>
    </div>
    {/* //container */}
    <div className="footer-copyright border-top py-3 bg-light">
      <div className="container d-flex align-items-center">
        <p className="mb-0"> © 2023 Company All rights reserved </p>
        <p className="text-muted mb-0 ms-auto d-flex align-items-center">
          <a href="#" className="d-block">
            <img alt="#" src="img/appstore.png" height={40} />
          </a>
          <a href="#" className="d-block ms-3">
            <img alt="#" src="img/playmarket.png" height={40} />
          </a>
        </p>
      </div>
    </div>
  </footer>
  <nav id="main-nav">
    <ul className="second-nav">
      <li>
        <a href="home.html">
          <i className="feather-home me-2" /> Homepage
        </a>
      </li>
      <li>
        <a href="my_order.html">
          <i className="feather-list me-2" /> My Orders
        </a>
      </li>
      <li>
        <a href="#">
          <i className="feather-edit-2 me-2" /> Authentication
        </a>
        <ul>
          <li>
            <a href="login.html">Login</a>
          </li>
          <li>
            <a href="signup.html">Register</a>
          </li>
          <li>
            <a href="forgot_password.html">Forgot Password</a>
          </li>
          <li>
            <a href="verification.html">Verification</a>
          </li>
          <li>
            <a href="location.html">Location</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="favorites.html">
          <i className="feather-heart me-2" /> Favorites
        </a>
      </li>
      <li>
        <a href="trending.html">
          <i className="feather-trending-up me-2" /> Trending
        </a>
      </li>
      <li>
        <a href="most_popular.html">
          <i className="feather-award me-2" /> Most Popular
        </a>
      </li>
      <li>
        <a href="restaurant.html">
          <i className="feather-paperclip me-2" /> Restaurant Detail
        </a>
      </li>
      <li>
        <a href="checkout.html">
          <i className="feather-list me-2" /> Checkout
        </a>
      </li>
      <li>
        <a href="successful.html">
          <i className="feather-check-circle me-2" /> Successful
        </a>
      </li>
      <li>
        <a href="map.html">
          <i className="feather-map-pin me-2" /> Live Map
        </a>
      </li>
      <li>
        <a href="#">
          <i className="feather-user me-2" /> Profile
        </a>
        <ul>
          <li>
            <a href="profile.html">Profile</a>
          </li>
          <li>
            <a href="favorites.html">Delivery support</a>
          </li>
          <li>
            <a href="contact-us.html">Contact Us</a>
          </li>
          <li>
            <a href="terms.html">Terms of use</a>
          </li>
          <li>
            <a href="privacy.html">Privacy &amp; Policy</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className="feather-alert-triangle me-2" /> Error
        </a>
        <ul>
          <li>
            <a href="not-found.html">Not Found</a>
          </li>
          <li>
            <a href="maintence.html"> Maintence</a>
          </li>
          <li>
            <a href="coming-soon.html">Coming Soon</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i className="feather-link me-2" /> Navigation Link Example
        </a>
        <ul>
          <li>
            <a href="#">Link Example 1</a>
            <ul>
              <li>
                <a href="#">Link Example 1.1</a>
                <ul>
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li>
                    <a href="#">Link</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Link Example 1.2</a>
                <ul>
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li>
                    <a href="#">Link</a>
                  </li>
                  <li>
                    <a href="#">Link</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Link Example 2</a>
          </li>
          <li>
            <a href="#">Link Example 3</a>
          </li>
          <li>
            <a href="#">Link Example 4</a>
          </li>
          <li data-nav-custom-content="">
            <div className="custom-message">
              You can add any custom content to your navigation items. This text
              is just an example.
            </div>
          </li>
        </ul>
      </li>
    </ul>
    <ul className="bottom-nav">
      <li className="email">
        <a className="text-danger" href="home.html">
          <p className="h5 m-0">
            <i className="feather-home text-danger" />
          </p>
          Home
        </a>
      </li>
      <li className="github">
        <a href="faq.html">
          <p className="h5 m-0">
            <i className="feather-message-circle" />
          </p>
          FAQ
        </a>
      </li>
      <li className="ko-fi">
        <a href="contact-us.html">
          <p className="h5 m-0">
            <i className="feather-phone" />
          </p>
          Help
        </a>
      </li>
    </ul>
  </nav>
  <div className="osahan-menu-fotter fixed-bottom bg-white px-3 py-2 text-center d-none">
    <div className="row">
      <div className="col selected">
        <a
          href="home.html"
          className="text-danger small fw-bold text-decoration-none"
        >
          <p className="h4 m-0">
            <i className="feather-home text-danger" />
          </p>
          Home
        </a>
      </div>
      <div className="col">
        <a
          href="most_popular.html"
          className="text-dark small fw-bold text-decoration-none"
        >
          <p className="h4 m-0">
            <i className="feather-map-pin" />
          </p>
          Trending
        </a>
      </div>
      <div className="col bg-white rounded-circle mt-n4 px-3 py-2">
        <div className="bg-danger rounded-circle mt-n0 shadow">
          <a
            href="checkout.html"
            className="text-white small fw-bold text-decoration-none"
          >
            <i className="feather-shopping-cart" />
          </a>
        </div>
      </div>
      <div className="col">
        <a
          href="favorites.html"
          className="text-dark small fw-bold text-decoration-none"
        >
          <p className="h4 m-0">
            <i className="feather-heart" />
          </p>
          Favorites
        </a>
      </div>
      <div className="col">
        <a
          href="profile.html"
          className="text-dark small fw-bold text-decoration-none"
        >
          <p className="h4 m-0">
            <i className="feather-user" />
          </p>
          Profile
        </a>
      </div>
    </div>
  </div>
  <header className="section-header">
    <section className="header-main shadow-sm bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-1">
            <a href="home.html" className="brand-wrap mb-0">
              <img alt="#" className="img-fluid" src="img/logo_web.png" />
            </a>
            {/* brand-wrap.// */}
          </div>
          <div className="col-3 d-flex align-items-center m-none">
            <div className="dropdown me-3">
              <a
                className="text-dark dropdown-toggle d-flex align-items-center py-3"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div>
                  <i className="feather-map-pin me-2 bg-light rounded-pill p-2 icofont-size" />
                </div>
                <div>
                  <p className="text-muted mb-0 small">Select Location</p>
                  Jawaddi Ludhiana...
                </div>
              </a>
              <div className="dropdown-menu p-0 drop-loc">
                <div className="osahan-country">
                  <div className="search_location bg-primary p-3 text-end">
                    <div className="input-group bg-white rounded shadow-sm">
                      <span className="input-group-text bg-transparent border-0 rounded-0">
                        <i className="feather-search" />
                      </span>
                      <input
                        type="text"
                        className="form-control bg-transparent border-0 rounded-0 px-0 shadow-none"
                        placeholder="Enter Your Location"
                        aria-label="Enter Your Location"
                      />
                    </div>
                  </div>
                  <div className="p-3 border-bottom">
                    <a href="home.html" className="text-decoration-none">
                      <p className="fw-bold text-primary m-0">
                        <i className="feather-navigation" /> New York, USA
                      </p>
                    </a>
                  </div>
                  <div className="filter">
                    <h6 className="p-3 bg-light m-0 border-bottom">
                      Choose your country
                    </h6>
                    <div className="border-bottom p-3">
                      <div className="form-check form-check-reverse m-0">
                        <input
                          type="radio"
                          id="customRadio1"
                          name="location"
                          className="form-check-input"
                        />
                        <label
                          className="form-check-label text-start w-100"
                          htmlFor="customRadio1"
                        >
                          Afghanistan
                        </label>
                      </div>
                    </div>
                    <div className="border-bottom p-3">
                      <div className="form-check form-check-reverse m-0">
                        <input
                          type="radio"
                          id="customRadio2"
                          name="location"
                          className="form-check-input"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label text-start w-100"
                          htmlFor="customRadio2"
                        >
                          India
                        </label>
                      </div>
                    </div>
                    <div className="border-bottom p-3">
                      <div className="form-check form-check-reverse m-0">
                        <input
                          type="radio"
                          id="customRadio3"
                          name="location"
                          className="form-check-input"
                        />
                        <label
                          className="form-check-label text-start w-100"
                          htmlFor="customRadio3"
                        >
                          USA
                        </label>
                      </div>
                    </div>
                    <div className="border-bottom p-3">
                      <div className="form-check form-check-reverse m-0">
                        <input
                          type="radio"
                          id="customRadio4"
                          name="location"
                          className="form-check-input"
                        />
                        <label
                          className="form-check-label text-start w-100"
                          htmlFor="customRadio4"
                        >
                          Australia
                        </label>
                      </div>
                    </div>
                    <div className="border-bottom p-3">
                      <div className="form-check form-check-reverse m-0">
                        <input
                          type="radio"
                          id="customRadio5"
                          name="location"
                          className="form-check-input"
                        />
                        <label
                          className="form-check-label text-start w-100"
                          htmlFor="customRadio5"
                        >
                          Japan
                        </label>
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="form-check form-check-reverse m-0">
                        <input
                          type="radio"
                          id="customRadio6"
                          name="location"
                          className="form-check-input"
                        />
                        <label
                          className="form-check-label text-start w-100"
                          htmlFor="customRadio6"
                        >
                          China
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* col.// */}
          <div className="col-8">
            <div className="d-flex align-items-center justify-content-end pe-5">
              {/* search */}
              <a href="search.html" className="widget-header me-4 text-dark">
                <div className="icon d-flex align-items-center">
                  <i className="feather-search h6 me-2 mb-0" />{" "}
                  <span>Search</span>
                </div>
              </a>
              {/* offers */}
              <a
                href="offers.html"
                className="widget-header me-4 text-white btn bg-primary m-none"
              >
                <div className="icon d-flex align-items-center">
                  <i className="feather-disc h6 me-2 mb-0" />{" "}
                  <span>Offers</span>
                </div>
              </a>
              {/* signin */}
              <a
                href="login.html"
                className="widget-header me-4 text-dark m-none"
              >
                <div className="icon d-flex align-items-center">
                  <i className="feather-user h6 me-2 mb-0" />{" "}
                  <span>Sign in</span>
                </div>
              </a>
              {/* my account */}
              <div className="dropdown me-4 m-none">
                <a
                  href="#"
                  className="dropdown-toggle text-dark py-3 d-block"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    alt="#"
                    src="img/user/1.jpg"
                    className="img-fluid rounded-circle header-user me-2 header-user"
                  />{" "}
                  Hi Osahan
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="profile.html">
                    My account
                  </a>
                  <a className="dropdown-item" href="faq.html">
                    Delivery support
                  </a>
                  <a className="dropdown-item" href="contact-us.html">
                    Contant us
                  </a>
                  <a className="dropdown-item" href="terms.html">
                    Term of use
                  </a>
                  <a className="dropdown-item" href="privacy.html">
                    Privacy policy
                  </a>
                  <a className="dropdown-item" href="login.html">
                    Logout
                  </a>
                </div>
              </div>
              {/* signin */}
              <a href="checkout.html" className="widget-header me-4 text-dark">
                <div className="icon d-flex align-items-center">
                  <i className="feather-shopping-cart h6 me-2 mb-0" />{" "}
                  <span>Cart</span>
                </div>
              </a>
              <a className="toggle" href="#">
                <span />
              </a>
            </div>
            {/* widgets-wrap.// */}
          </div>
          {/* col.// */}
        </div>
        {/* row.// */}
      </div>
      {/* container.// */}
    </section>
    {/* header-main .// */}
  </header>
  <div className="d-none">
    <div className="bg-primary p-3 d-flex align-items-center">
      <a className="toggle togglew toggle-2" href="#">
        <span />
      </a>
      <h4 className="fw-bold m-0 text-white">My Order</h4>
    </div>
  </div>
  <div className="py-4 osahan-main-body">
    <div className="container">
      <div className="row g-4">
        <div className="col-md-3">
          <ul
            className="nav nav-tabsa custom-tabsa border-0 flex-column bg-white rounded overflow-hidden shadow-sm p-2 c-t-order"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <a
                className="nav-link border-0 text-dark py-3 active"
                href="my_order.html"
              >
                <i className="feather-check me-2 text-success mb-0" /> Completed
              </a>
            </li>
            <li className="nav-item border-top" role="presentation">
              <a
                className="nav-link border-0 text-dark py-3"
                href="my_order.html"
              >
                <i className="feather-clock me-2 text-warning mb-0" /> On
                Progress
              </a>
            </li>
            <li className="nav-item border-top" role="presentation">
              <a
                className="nav-link border-0 text-dark py-3"
                href="my_order.html"
              >
                <i className="feather-x-circle me-2 text-danger mb-0" />{" "}
                Canceled
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-9">
          {/* body */}
          <section className="bg-white osahan-main-body rounded shadow-sm overflow-hidden">
            <div className="container p-0">
              <div className="row">
                <div className="col-lg-12">
                  <div className="osahan-status">
                    {/* status complete */}
                    <div className="p-3 status-order bg-white border-bottom d-flex align-items-center">
                      <p className="m-0">
                        <i className="feather-calendar text-primary" /> 16 June,
                        11:30AM
                      </p>
                      <a
                        href="review.html"
                        className="text-primary ms-auto text-decoration-none"
                      >
                        Review
                      </a>
                    </div>
                    <div className="p-3 border-bottom">
                      <h6 className="fw-bold">Order Status</h6>
                      <div className="tracking-wrap">
                        <div className="my-1 step active">
                          <span className="icon text-success">
                            <i className="feather-check" />
                          </span>
                          <span className="text small">Preparing order</span>
                        </div>
                        {/* step.// */}
                        <div className="my-1 step active">
                          <span className="icon text-success">
                            <i className="feather-check" />
                          </span>
                          <span className="text small"> Ready to collect</span>
                        </div>
                        {/* step.// */}
                        <div className="my-1 step">
                          <span className="icon text-success">
                            <i className="feather-check" />
                          </span>
                          <span className="text small"> On the way </span>
                        </div>
                        {/* step.// */}
                        <div className="my-1 step">
                          <span className="icon text-success">
                            <i className="feather-check" />
                          </span>
                          <span className="text small">Delivered Order</span>
                        </div>
                        {/* step.// */}
                      </div>
                    </div>
                    {/* Destination */}
                    <div className="p-3 border-bottom bg-white">
                      <h6 className="fw-bold">Destination</h6>
                      <p className="m-0 small">
                        554 West 142nd Street, New York, NY 10031
                      </p>
                    </div>
                    <div className="p-3 border-bottom">
                      <p className="fw-bold small mb-1">Courier</p>
                      <img
                        alt="#"
                        src="img/logo_web.png"
                        className="img-fluid sc-osahan-logo me-2"
                      />{" "}
                      <span className="small text-primary fw-bold">
                        Grocery Courier
                      </span>
                    </div>
                    {/* total price */}
                    {/* Destination */}
                    <div className="p-3 bg-white">
                      <div className="d-flex align-items-center mb-2">
                        <h6 className="fw-bold mb-1">Total Cost</h6>
                        <h6 className="fw-bold ms-auto mb-1">$8.52</h6>
                      </div>
                      <p className="m-0 small text-muted">
                        You can check your order detail here,
                        <br />
                        Thank you for order.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>

</>

    </div>
  )
}

export default StatusCompleted


