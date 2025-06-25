import React from 'react'

const Map = () => {
  return (
    <div>
      <>

  <div className="">
    <div className="bg-primary border-bottom p-3 d-flex align-items-center">
      <a className="toggle togglew toggle-2" href="#">
        <span />
      </a>
      <h4 className="fw-bold m-0 text-white">Track</h4>
    </div>
  </div>
  <div className="osahan-map ">
    <div className="bg-primary  ">
      <div className="container ">
        <div className="osahan-slider-map py-3 d-flex align-items-center justify-content-between">
          <div className="osahan-slider-item">
            <div className="text-white">
              <div className="member-plan">Fast Food</div>
            </div>
          </div>
          <div className="osahan-slider-item">
            <div className="text-white">
              <div className="member-plan">Desserts</div>
            </div>
          </div>
          <div className="osahan-slider-item">
            <div className="text-white">
              <div className="member-plan">Dim Sum</div>
            </div>
          </div>
          <div className="osahan-slider-item">
            <div className="text-white">
              <div className="member-plan">Breakfast</div>
            </div>
          </div>
          <div className="osahan-slider-item">
            <div className="text-white">
              <div className="member-plan">Breakfast</div>
            </div>
          </div>
          <div className="osahan-slider-item">
            <div className="text-white">
              <div className="member-plan">Dim Sum</div>
            </div>
          </div>
          <div className="osahan-slider-item">
            <div className="text-white">
              <div className="member-plan">Breakfast</div>
            </div>
          </div>
          <div className="osahan-slider-item">
            <div className="text-white">
              <div className="member-plan">Breakfast</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="section bg-white osahan-track-order-page position-relative zn-1">
      <iframe
        className="position-absolute w-100 border-0"
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d13696.650704896498!2d75.82434255!3d30.8821099!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1555184720550!5m2!1sen!2sin"
        height={676}
        allowFullScreen=""
      />
      <div className="container py-5 position-absolute z-0 start-0 end-0">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 text-center pb-4">
            <div className="osahan-point mx-auto" />
          </div>
          <div className="col-md-6">
            <div className="bg-white p-4 shadow-lg rounded mb-2">
              <div className="mb-2">
                <small>
                  Order #25102589748
                  <a className="float-end fw-bold" href="#">
                    <i className="feather-help-circle" /> HELP
                  </a>
                </small>
              </div>
              <h6 className="mb-1 mt-1">
                <a href="restaurant.html" className="text-black">
                  Spice Hut Restaurant
                </a>
              </h6>
              <p className="text-gray mb-0">
                <i className="feather-clock" /> 04:19 PM | 8 Items | $314
              </p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded">
              <div className="osahan-track-order-detail po">
                <h5 className="mt-0 mb-3">Order Details</h5>
                <div className="row">
                  <div className="col-md-5">
                    <small>FROM</small>
                    <h6 className="mb-1 mt-1">
                      <a href="restaurant.html" className="text-black">
                        <i className="feather-shopping-cart" /> Spice Hut
                        Restaurant
                      </a>
                    </h6>
                    <p className="text-gray mb-5">2036, NEW YORK</p>
                    <small>DELIVER TO</small>
                    <h6 className="mb-1 mt-1">
                      <span className="text-black">
                        <i className="feather-map-pin" /> Other
                      </span>
                    </h6>
                    <p className="text-gray mb-0">
                      291, Jawaddi Kalan, Ludhiana, Punjab 141002, India
                    </p>
                  </div>
                  <div className="col-md-7">
                    <div className="mb-2">
                      <small>
                        <i className="feather-list" /> 5 ITEMS
                      </small>
                    </div>
                    <p className="mb-2">
                      <i className="feather-ui-press text-danger food-item">
                        ·
                      </i>{" "}
                      Chicken Tikka Sub 12" (30 cm) x 1{" "}
                      <span className="float-end text-secondary">$314</span>
                    </p>
                    <p className="mb-2">
                      <i className="feather-ui-press text-success food-item">
                        ·
                      </i>{" "}
                      Corn &amp; Peas Salad x 1{" "}
                      <span className="float-end text-secondary">$209</span>
                    </p>
                    <p className="mb-2">
                      <i className="feather-ui-press text-success food-item">
                        ·
                      </i>{" "}
                      Veg Seekh Sub 6" (15 cm) x 1{" "}
                      <span className="float-end text-secondary">$133</span>
                    </p>
                    <p className="mb-2">
                      <i className="feather-ui-press text-danger food-item">
                        ·
                      </i>{" "}
                      Chicken Tikka Sub 12" (30 cm) x 1{" "}
                      <span className="float-end text-secondary">$314</span>
                    </p>
                    <hr />
                    <p className="mb-0 fw-bold text-black">
                      TOTAL BILL{" "}
                      <span className="float-end text-secondary">$209</span>
                    </p>
                    <p className="mb-0 text-info">
                      <small>
                        Paid via Credit/Debit card
                        <span className="float-end text-danger">$620 OFF</span>
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 shadow-lg rounded mt-2">
              <div className="row text-center">
                <div className="col">
                  <i className="feather-list h4 icofont-3x text-info" />
                  <p className="mt-1 fw-bold text-dark mb-0">Order Received</p>
                  <small className="text-info mb-0">NOW</small>
                </div>
                <div className="col">
                  <i className="feather-check-circle h4 icofont-3x text-success" />
                  <p className="mt-1 fw-bold text-dark mb-0">Order Confirmed</p>
                  <small className="text-success mb-0">NEXT</small>
                </div>
                <div className="col">
                  <i className="feather-truck h4 icofont-3x text-primary" />
                  <p className="mt-1 fw-bold text-dark mb-0">Order Picked Up</p>
                  <small className="text-primary mb-0">
                    LATER (ET : 30min)
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* slider */}
    <div className="container slider_restaurant py-5 border-top">
      <div className="trending-slider">
        <div className="osahan-slider-item px-1">
          <div className="list-card bg-white h-100 d-flex align-items-center rounded overflow-hidden position-relative shadow-sm">
            <div className="list-card-image">
              <a href="restaurant.html">
                <img
                  alt="#"
                  src="img/trending1.png"
                  className="img-fluid item-img"
                />
              </a>
            </div>
            <div className="p-3 position-relative">
              <div className="list-card-body">
                <h6 className="mb-1">
                  <a href="restaurant.html" className="text-black">
                    Dave's Bar-B-Que
                  </a>
                </h6>
                <p className="text-gray mb-2">963 Madyson Drive Suite 679</p>
                <p className="text-warning mb-0">
                  <i className="feather-star" />
                  <i className="feather-star" />
                  <i className="feather-star" />
                  <i className="feather-star" />
                  <i className="feather-star" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="osahan-slider-item px-1">
          <div className="list-card bg-white h-100 d-flex align-items-center rounded overflow-hidden position-relative shadow-sm">
            <div className="list-card-image">
              <a href="restaurant.html">
                <img
                  alt="#"
                  src="img/trending2.png"
                  className="img-fluid item-img"
                />
              </a>
            </div>
            <div className="p-3 position-relative">
              <div className="list-card-body">
                <h6 className="mb-1">
                  <a href="restaurant.html" className="text-black">
                    Thai Famous Cuisine
                  </a>
                </h6>
                <p className="text-gray mb-2">980 Syria Drive Suite 680</p>
                <p className="text-warning mb-0">
                  <i className="feather-star" />
                  <i className="feather-star" />
                  <i className="feather-star" />
                  <i className="feather-star" />
                  <i className="feather-star" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="osahan-slider-item px-1">
          <div className="list-card bg-white h-100 d-flex align-items-center rounded overflow-hidden position-relative shadow-sm">
            <div className="list-card-image">
              <a href="restaurant.html">
                <img
                  alt="#"
                  src="img/trending3.png"
                  className="img-fluid item-img"
                />
              </a>
            </div>
            <div className="p-3 position-relative">
              <div className="list-card-body">
                <h6 className="mb-1">
                  <a href="restaurant.html" className="text-black">
                    The osahan Restaurant
                  </a>
                </h6>
                <p className="text-gray mb-2">560 Africa Drive Suite 560</p>
                <p className="text-warning mb-0">
                  <i className="feather-star" />
                  <i className="feather-star" />
                  <i className="feather-star" />
                  <i className="feather-star" />
                  <i className="feather-star" />
                </p>
              </div>
            </div>
          </div>
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
</>

    </div>
  )
}

export default Map
