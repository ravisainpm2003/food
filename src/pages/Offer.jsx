import React from 'react'

const Offer = () => {
  return (
    <div>
      <>

  <div className="d-none">
    <div className="bg-primary p-3 d-flex align-items-center">
      <a className="toggle togglew toggle-2" href="#">
        <span />
      </a>
      <h4 className="fw-bold m-0 text-white">Offer</h4>
    </div>
  </div>
  <div className="offer-section">
    <div className="container">
      <div className="py-5 d-flex align-items-center">
        <div>
          <h2 className="text-white">Offers for you</h2>
          <p className="h6 text-white">
            Explore top deals and offers exclusively for you!
          </p>
        </div>
        <div className="ms-auto">
          <img alt="#" src="img/offers.png" className="img-fluid offers_img" />
        </div>
      </div>
    </div>
  </div>
  {/* Tabs */}
  <div className="bg-white shadow-sm">
    <div className="container">
      <div className="bg-white">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="px-0 py-3 nav-link text-dark h6 border-0 mb-0 active"
              id="profile-tab"
              data-bs-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Payment offers/Coupons
            </a>
          </li>
          <li className="nav-item bottom-tab" role="presentation">
            <a
              className="px-0 py-3 nav-link text-dark h6 border-0 mb-0 ms-3"
              id="home-tab"
              data-bs-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Restaurant offers
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="tab-content" id="myTabContent">
      <div
        className="tab-pane fade py-4"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <h5 className="mb-1">All offers (163)</h5>
        <p>All offers and deals, from restaurants near you</p>
        <div className="row">
          <div className="col-md-3 pb-3">
            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
              <div className="list-card-image">
                <div className="star position-absolute">
                  <span className="badge text-bg-success">
                    <i className="feather-star" /> 3.1 (300+)
                  </span>
                </div>
                <div className="favourite-heart text-danger position-absolute rounded-circle">
                  <a href="#">
                    <i className="feather-heart" />
                  </a>
                </div>
                <div className="member-plan position-absolute">
                  <span className="badge text-bg-dark">Promoted</span>
                </div>
                <a href="restaurant.html">
                  <img
                    alt="#"
                    src="img/popular1.png"
                    className="img-fluid item-img w-100"
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
                  <p className="text-gray mb-1 small">• North • Hamburgers</p>
                  <p className="text-gray mb-1 rating"></p>
                  <ul className="rating-stars list-unstyled">
                    <li>
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star" />
                    </li>
                  </ul>
                </div>
                <div className="list-card-badge">
                  <span className="badge text-bg-danger">OFFER</span>{" "}
                  <small>65% OSAHAN50</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 pb-3">
            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
              <div className="list-card-image">
                <div className="star position-absolute">
                  <span className="badge text-bg-success">
                    <i className="feather-star" /> 3.1 (300+)
                  </span>
                </div>
                <div className="favourite-heart text-danger position-absolute rounded-circle">
                  <a href="#">
                    <i className="feather-heart" />
                  </a>
                </div>
                <div className="member-plan position-absolute">
                  <span className="badge text-bg-dark">Promoted</span>
                </div>
                <a href="restaurant.html">
                  <img
                    alt="#"
                    src="img/popular2.png"
                    className="img-fluid item-img w-100"
                  />
                </a>
              </div>
              <div className="p-3 position-relative">
                <div className="list-card-body">
                  <h6 className="mb-1">
                    <a href="restaurant.html" className="text-black">
                      Thai Famous Indian Cuisine
                    </a>
                  </h6>
                  <p className="text-gray mb-1 small">• Indian • Pure veg</p>
                  <p className="text-gray mb-1 rating"></p>
                  <ul className="rating-stars list-unstyled">
                    <li>
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star" />
                    </li>
                  </ul>
                </div>
                <div className="list-card-badge">
                  <span className="badge text-bg-success">OFFER</span>{" "}
                  <small>65% off</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 pb-3">
            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
              <div className="list-card-image">
                <div className="star position-absolute">
                  <span className="badge text-bg-success">
                    <i className="feather-star" /> 3.1 (300+)
                  </span>
                </div>
                <div className="favourite-heart text-danger position-absolute rounded-circle">
                  <a href="#">
                    <i className="feather-heart" />
                  </a>
                </div>
                <div className="member-plan position-absolute">
                  <span className="badge text-bg-dark">Promoted</span>
                </div>
                <a href="restaurant.html">
                  <img
                    alt="#"
                    src="img/popular3.png"
                    className="img-fluid item-img w-100"
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
                  <p className="text-gray mb-1 small">
                    • Hamburgers • Pure veg
                  </p>
                  <p className="text-gray mb-1 rating"></p>
                  <ul className="rating-stars list-unstyled">
                    <li>
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star" />
                    </li>
                  </ul>
                </div>
                <div className="list-card-badge">
                  <span className="badge text-bg-danger">OFFER</span>{" "}
                  <small>65% OSAHAN50</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 pb-3">
            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
              <div className="list-card-image">
                <div className="star position-absolute">
                  <span className="badge text-bg-success">
                    <i className="feather-star" /> 3.1 (300+)
                  </span>
                </div>
                <div className="favourite-heart text-danger position-absolute rounded-circle">
                  <a href="#">
                    <i className="feather-heart" />
                  </a>
                </div>
                <div className="member-plan position-absolute">
                  <span className="badge text-bg-dark">Promoted</span>
                </div>
                <a href="restaurant.html">
                  <img
                    alt="#"
                    src="img/popular4.png"
                    className="img-fluid item-img w-100"
                  />
                </a>
              </div>
              <div className="p-3 position-relative">
                <div className="list-card-body">
                  <h6 className="mb-1">
                    <a href="restaurant.html" className="text-black">
                      Bite Me Now Sandwiches
                    </a>
                  </h6>
                  <p className="text-gray mb-1 small">American • Pure veg</p>
                  <p className="text-gray mb-1 rating"></p>
                  <ul className="rating-stars list-unstyled">
                    <li>
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star" />
                    </li>
                  </ul>
                </div>
                <div className="list-card-badge">
                  <span className="badge text-bg-success">OFFER</span>{" "}
                  <small>65% off</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 pb-3">
            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
              <div className="list-card-image">
                <div className="star position-absolute">
                  <span className="badge text-bg-success">
                    <i className="feather-star" /> 3.1 (300+)
                  </span>
                </div>
                <div className="favourite-heart text-danger position-absolute rounded-circle">
                  <a href="#">
                    <i className="feather-heart" />
                  </a>
                </div>
                <div className="member-plan position-absolute">
                  <span className="badge text-bg-dark">Promoted</span>
                </div>
                <a href="restaurant.html">
                  <img
                    alt="#"
                    src="img/popular5.png"
                    className="img-fluid item-img w-100"
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
                  <p className="text-gray mb-1 small">• North • Hamburgers</p>
                  <p className="text-gray mb-1 rating"></p>
                  <ul className="rating-stars list-unstyled">
                    <li>
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star" />
                    </li>
                  </ul>
                </div>
                <div className="list-card-badge">
                  <span className="badge text-bg-danger">OFFER</span>{" "}
                  <small>65% OSAHAN50</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 pb-3">
            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
              <div className="list-card-image">
                <div className="star position-absolute">
                  <span className="badge text-bg-success">
                    <i className="feather-star" /> 3.1 (300+)
                  </span>
                </div>
                <div className="favourite-heart text-danger position-absolute rounded-circle">
                  <a href="#">
                    <i className="feather-heart" />
                  </a>
                </div>
                <div className="member-plan position-absolute">
                  <span className="badge text-bg-dark">Promoted</span>
                </div>
                <a href="restaurant.html">
                  <img
                    alt="#"
                    src="img/popular6.png"
                    className="img-fluid item-img w-100"
                  />
                </a>
              </div>
              <div className="p-3 position-relative">
                <div className="list-card-body">
                  <h6 className="mb-1">
                    <a href="restaurant.html" className="text-black">
                      Thai Famous Indian Cuisine
                    </a>
                  </h6>
                  <p className="text-gray mb-1 small">• Indian • Pure veg</p>
                  <p className="text-gray mb-1 rating"></p>
                  <ul className="rating-stars list-unstyled">
                    <li>
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star" />
                    </li>
                  </ul>
                </div>
                <div className="list-card-badge">
                  <span className="badge text-bg-success">OFFER</span>{" "}
                  <small>65% off</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 pb-3">
            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
              <div className="list-card-image">
                <div className="star position-absolute">
                  <span className="badge text-bg-success">
                    <i className="feather-star" /> 3.1 (300+)
                  </span>
                </div>
                <div className="favourite-heart text-danger position-absolute rounded-circle">
                  <a href="#">
                    <i className="feather-heart" />
                  </a>
                </div>
                <div className="member-plan position-absolute">
                  <span className="badge text-bg-dark">Promoted</span>
                </div>
                <a href="restaurant.html">
                  <img
                    alt="#"
                    src="img/popular7.png"
                    className="img-fluid item-img w-100"
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
                  <p className="text-gray mb-1 small">
                    • Hamburgers • Pure veg
                  </p>
                  <p className="text-gray mb-1 rating"></p>
                  <ul className="rating-stars list-unstyled">
                    <li>
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star" />
                    </li>
                  </ul>
                </div>
                <div className="list-card-badge">
                  <span className="badge text-bg-danger">OFFER</span>{" "}
                  <small>65% OSAHAN50</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 pb-3">
            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
              <div className="list-card-image">
                <div className="star position-absolute">
                  <span className="badge text-bg-success">
                    <i className="feather-star" /> 3.1 (300+)
                  </span>
                </div>
                <div className="favourite-heart text-danger position-absolute rounded-circle">
                  <a href="#">
                    <i className="feather-heart" />
                  </a>
                </div>
                <div className="member-plan position-absolute">
                  <span className="badge text-bg-dark">Promoted</span>
                </div>
                <a href="restaurant.html">
                  <img
                    alt="#"
                    src="img/popular8.png"
                    className="img-fluid item-img w-100"
                  />
                </a>
              </div>
              <div className="p-3 position-relative">
                <div className="list-card-body">
                  <h6 className="mb-1">
                    <a href="restaurant.html" className="text-black">
                      Bite Me Now Sandwiches
                    </a>
                  </h6>
                  <p className="text-gray mb-1 small">American • Pure veg</p>
                  <p className="text-gray mb-1 rating"></p>
                  <ul className="rating-stars list-unstyled">
                    <li>
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star" />
                    </li>
                  </ul>
                </div>
                <div className="list-card-badge">
                  <span className="badge text-bg-success">OFFER</span>{" "}
                  <small>65% off</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 pb-3">
            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
              <div className="list-card-image">
                <div className="star position-absolute">
                  <span className="badge text-bg-success">
                    <i className="feather-star" /> 3.1 (300+)
                  </span>
                </div>
                <div className="favourite-heart text-danger position-absolute rounded-circle">
                  <a href="#">
                    <i className="feather-heart" />
                  </a>
                </div>
                <div className="member-plan position-absolute">
                  <span className="badge text-bg-dark">Promoted</span>
                </div>
                <a href="restaurant.html">
                  <img
                    alt="#"
                    src="img/popular5.png"
                    className="img-fluid item-img w-100"
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
                  <p className="text-gray mb-1 small">• North • Hamburgers</p>
                  <p className="text-gray mb-1 rating"></p>
                  <ul className="rating-stars list-unstyled">
                    <li>
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star" />
                    </li>
                  </ul>
                </div>
                <div className="list-card-badge">
                  <span className="badge text-bg-danger">OFFER</span>{" "}
                  <small>65% OSAHAN50</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 pb-3">
            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
              <div className="list-card-image">
                <div className="star position-absolute">
                  <span className="badge text-bg-success">
                    <i className="feather-star" /> 3.1 (300+)
                  </span>
                </div>
                <div className="favourite-heart text-danger position-absolute rounded-circle">
                  <a href="#">
                    <i className="feather-heart" />
                  </a>
                </div>
                <div className="member-plan position-absolute">
                  <span className="badge text-bg-dark">Promoted</span>
                </div>
                <a href="restaurant.html">
                  <img
                    alt="#"
                    src="img/popular2.png"
                    className="img-fluid item-img w-100"
                  />
                </a>
              </div>
              <div className="p-3 position-relative">
                <div className="list-card-body">
                  <h6 className="mb-1">
                    <a href="restaurant.html" className="text-black">
                      Thai Famous Indian Cuisine
                    </a>
                  </h6>
                  <p className="text-gray mb-1 small">• Indian • Pure veg</p>
                  <p className="text-gray mb-1 rating"></p>
                  <ul className="rating-stars list-unstyled">
                    <li>
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star star_active" />
                      <i className="feather-star" />
                    </li>
                  </ul>
                </div>
                <div className="list-card-badge">
                  <span className="badge text-bg-success">OFFER</span>{" "}
                  <small>65% off</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="tab-pane fade show active py-4"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <h5 className="mb-3 mt-0">Available Coupons</h5>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="bg-white shadow-sm rounded p-4">
              <p className="h6 mb-3">
                <span className="feather-home text-primary" />
                <span className="ms-3">SBI75</span>
              </p>
              <p className="fw-bold mb-2">
                Get 15% discount using SBI Credit Cards
              </p>
              <p className="mb-4">
                Use code SBI75 and get 15% discount up to Rs.75 on orders above
                Rs.400
              </p>
              <p>
                <a href="#" className="text-primary">
                  + MORE
                </a>
              </p>
              <a href="#" className="btn btn-outline-primary">
                COPY CODE
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="bg-white shadow-sm rounded p-4">
              <p className="h6 mb-3">
                <span className="feather-home text-primary" />
                <span className="ms-3">PAYZAPP100</span>
              </p>
              <p className="fw-bold mb-2">
                Get 15% discount using HDFC PayZapp Card
              </p>
              <p className="mb-4">
                Use code PAYZAPP100 &amp; get 15% discount up to Rs.100 on
                orders above Rs.250
              </p>
              <p>
                <a href="#" className="text-primary">
                  + MORE
                </a>
              </p>
              <a href="#" className="btn btn-outline-primary">
                COPY CODE
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="bg-white shadow-sm rounded p-4">
              <p className="h6 mb-3">
                <span className="feather-home text-primary" />
                <span className="ms-3">LP75</span>
              </p>
              <p className="fw-bold mb-2">
                Get flat cashback of Rs.75 using LazyPay
              </p>
              <p className="mb-4">
                Use code LP75 &amp; get flat cashback of Rs.75 on orders above
                Rs.250 on first LazyPay
              </p>
              <p>
                <a href="#" className="text-primary">
                  + MORE
                </a>
              </p>
              <a href="#" className="btn btn-outline-primary">
                COPY CODE
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="bg-white shadow-sm rounded p-4">
              <p className="h6 mb-3">
                <span className="feather-home text-primary" />
                <span className="ms-3">RUPAYFEST</span>
              </p>
              <p className="fw-bold mb-2">Get 30% discount using RuPay Cards</p>
              <p className="mb-4">
                Use code RUPAYFEST and get 30% discount up to Rs.100 on orders
                above Rs.199
              </p>
              <p>
                <a href="#" className="text-primary">
                  + MORE
                </a>
              </p>
              <a href="#" className="btn btn-outline-primary">
                COPY CODE
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="bg-white shadow-sm rounded p-4">
              <p className="h6 mb-3">
                <span className="feather-home text-primary" />
                <span className="ms-3">FCH50</span>
              </p>
              <p className="fw-bold mb-2">Get 20% cashback using Freecharge</p>
              <p className="mb-4">
                Use code FCH50 and get 20% cashback up to Rs.50 on transaction
                using Freecharge.
              </p>
              <p>
                <a href="#" className="text-primary">
                  + MORE
                </a>
              </p>
              <a href="#" className="btn btn-outline-primary">
                COPY CODE
              </a>
            </div>
          </div>
        </div>
        <h5 className="mb-3 mt-2">Bank Offers</h5>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card bg-white rounded shadow-sm border-0 p-4">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="img/axis.png" className="img-fluid" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-text fw-bold mb-1">
                      Get 4% cashback with Flipkart Axis Bank Credit Card
                    </p>
                    <p className="card-text text-muted">
                      Get 4% cashback on orders using Flipkart Axis Bank Credit
                      Cards
                    </p>
                    <a href="#" className="text-primary">
                      + MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card bg-white rounded shadow-sm border-0 p-4">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="img/axis.png" className="img-fluid" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-text fw-bold mb-1">
                      Get 4% cashback using Axis Bank Ace Credit Cards
                    </p>
                    <p className="card-text text-muted">
                      Get 4% cashback on orders using Axis Bank Ace Credit Cards
                    </p>
                    <a href="#" className="text-primary">
                      + MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer */}
  <div className="osahan-menu-fotter fixed-bottom bg-white px-3 py-2 text-center d-none">
    <div className="row">
      <div className="col">
        <a
          href="home.html"
          className="text-dark small fw-bold text-decoration-none"
        >
          <p className="h4 m-0">
            <i className="feather-home text-dark" />
          </p>
          Home
        </a>
      </div>
      <div className="col selected">
        <a
          href="trending.html"
          className="text-danger small fw-bold text-decoration-none"
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

</>

    </div>
  )
}

export default Offer
