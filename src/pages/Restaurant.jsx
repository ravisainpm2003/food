import axios from "axios";
import React, { use, useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import ENDPOINT from "../components/utilities/ENDPOINT";
import SecurityHeaders from "../components/utilities/SecurityHeaders";
import { UserContext } from "../components/utilities/UserContext";
import Resturantskel from "../components/skelton/Resturantskel";

const Restaurant = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState({ quickBites: [], starters: [], soups: [] });
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newReview, setNewReview] = useState({
    rating: 0,
    comment: "",
    user_name: "",
  });
  const [cart, setCart] = useState([]);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
  });
  const params = useParams();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const getProduct = async () => {
    try {
      const data = new FormData();
      data.append("product_id", params.id);
      const res = await axios.post(
        ENDPOINT + "get-food-details.php",
        data,
        SecurityHeaders
      );
      if (res.data.status === "success") {
        setRestaurant(res.data.data.restaurant);
        setMenu(res.data.data.menu);
        setReviews(res.data.data.reviews);
      }
    } catch (err) {
      console.log("Get Product Error " + err);
    }
  };

  const getCart = async () => {
    try {
      const data = new FormData();
      data.append("user_token", user.session);
      const res = await axios.post(
        ENDPOINT + "get-carts2.php",
        data,
        SecurityHeaders
      );
      if (res.data.status === "success") {
        setCart(res.data.data);
        setLoading(false);
      }
    } catch (err) {
      console.log("Get Cart Error " + err);
    }
  };
  const [error, setError] = useState(null);

  const submitReview = async (e) => {
       e.preventDefault();
    if(newReview.rating === 0 ) {
     setError("Please select a rating before submitting your review.");
      return;
    }
 
    try {
      const data = new FormData();
      data.append("restaurant_id", params.id);
      data.append("user_name", newReview.user_name);
      data.append("rating", newReview.rating);
      data.append("comment", newReview.comment);
      const res = await axios.post(
        ENDPOINT + "submit-review.php",
        data,
        SecurityHeaders
      );
      if (res.data.status === "success") {
        setReviews([
          ...reviews,
          { ...newReview, created_at: new Date().toISOString() },
        ]);
        setNewReview({ rating: 0, comment: "", user_name: "" });
        getProduct();
      }
    } catch (err) {
      console.log("Submit Review Error " + err);
    }
  };

  const addToCart = async (item) => {
    try {
      const existingItem = cart.find((cartItem) => cartItem.id === item.id);
      const newQuantity = existingItem ? +existingItem.quantity + 1 : 1;
      const data = new FormData();
      data.append("user_token", user.session);
      data.append("restaurant_id", params.id);
      data.append("menu_item_id", item.id);
      data.append("quantity", newQuantity);
      data.append("price", item.price);
      const res = await axios.post(
        ENDPOINT + "update-cart.php",
        data,
        SecurityHeaders
      );
      if (res.data.status === "success") {
        getCart(); // Refresh cart
      }
    } catch (err) {
      console.log("Add to Cart Error " + err);
    }
  };

  const updateCartQuantity = async (itemId, change) => {
    try {
      const item = cart.find((cartItem) => cartItem.id === itemId);
      if (!item) return;

      // item.quantity converts to number
      const itemQuantity = Number(item.quantity);

      const newQuantity = itemQuantity + +change;
      const data = new FormData();
      data.append("user_token", user.session);
      data.append("restaurant_id", params.id);
      data.append("menu_item_id", itemId);
      data.append("quantity", newQuantity);
      data.append("price", item.price);
      const res = await axios.post(
        ENDPOINT + "update-cart.php",
        data,
        SecurityHeaders
      );
      if (res.data.status === "success") {
        getCart(); // Refresh cart
      }
    } catch (err) {
      console.log("Update Cart Quantity Error " + err);
    }
  };

  useEffect(() => {
    getProduct();
    getCart();
  }, []);

  if (!restaurant)
    return (
      <div>
        {loading ? (
          <>
            {" "}
            <Resturantskel />
          </>
        ) : (
          <></>
        )}
      </div>
    );

  return (
    <div className="">
      {/* Restaurant Header */}

      <div className="offer-section px-4 py-4">
        <img alt="#" src={restaurant.image} className="restaurant-pic" />
        <div className="pt-3 text-white">
          <h2 className="fw-bold">{restaurant.name}</h2>
          <p className="text-white m-0">{restaurant.location}</p>
          <div className="rating-wrap d-flex align-items-center mt-2 mb-2">
            <Rating
              name="size-small"
              value={restaurant.rating}
              readOnly
              size="small"
              precision={0.5}
            />
            <p className="label-rating text-white ms-2 mb-0 pb-0 small">
              {" "}
              ({restaurant.review_count} Reviews)
            </p>
          </div>
        </div>
        <div className="pb-4">
          <div className="row">
            <div className="col-6 col-md-2">
              <p className="text-white-50 fw-bold m-0 small">Delivery</p>
              <p className="text-white m-0">Free</p>
            </div>
            <div className="col-6 col-md-2">
              <p className="text-white-50 fw-bold m-0 small">Open time</p>
              <p className="text-white m-0">8:00 AM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Items */}
      <div className="container">
        <p className="fw-bold pt-4 m-0">FEATURED ITEMS</p>
        <div className="trending-slider d-flex rounded">
          {menu.quickBites.slice(0, 3).map((item) => (
            <div key={item.id} className="col-2 px-1">
              <div className="list-card col-12 bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <div className="list-card-image">
                  <img
                    alt="#"
                    src={item.image}
                    className="img-fluid item-img w-100"
                  />
                </div>
                <div className="p-3 position-relative">
                  <h6 className="mb-1">{item.name}</h6>
                  <p className="text-gray mb-3">{item.type}</p>
                  <p className="text-gray m-0">₹{item.price}</p>

                 
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => addToCart(item)}
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Menu */}
      <div className="container position-relative">
        <div className="row">
          <div className="col-md-8 pt-3">
            <div className="shadow-sm rounded bg-white mb-3 overflow-hidden">
              {Object.entries(menu).map(
                ([category, items]) =>
                  items.length > 0 && (
                    <div key={category}>
                      <h6 className="p-3 m-0 bg-light w-100">
                        {category.charAt(0).toUpperCase() + category.slice(1)}{" "}
                        <small className="text-black-50">
                          {items.length} ITEMS
                        </small>
                      </h6>
                      <div className="col-md-12 px-0 border-top">
                        {items.map((item) => (
                          <div
                            key={item.id}
                            className="d-flex gap-2 p-3 border-bottom gold-members align-items-center justify-content-between"
                          >
                            <div
                              className={`fw-bold ${
                                item.type === "non-veg"
                                  ? "text-danger"
                                  : "text-success"
                              }`}
                            >
                              .
                            </div>
                            <div>
                              <h6 className="mb-1">{item.name}</h6>
                              <p className="text-muted mb-0">₹{item.price}</p>
                            </div>
                            <span className="ms-auto gap-3 d-flex align-items-center">
                              <img
                                alt="#" 
                                src={item.image}
                                className="rounded img-fluid"
                                style={{ width: "70px", height: "70px" }}
                              />
                              <button
                                className="btn btn-outline-secondary btn-sm"
                                onClick={() => addToCart(item)}
                              >
                                ADD
                              </button>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
              )}
            </div>

            {/* Reviews */}
            <div className="bg-white p-3 mb-3 restaurant-detailed-ratings-and-reviews shadow-sm rounded">
              <h6 className="mb-1">All Ratings and Reviews</h6>
              {reviews.map((review) => (
                <div key={review.id} className="reviews-members py-3">
                  <div className="d-flex align-items-start gap-3">
                    <img
                      alt="#"
                      src="img/reviewer1.png"
                      className="rounded-pill"
                    />
                    <div>
                      <div className="reviews-members-header">
                        <Rating value={review.rating} readOnly size="small" />
                        <h6 className="mb-0">{review.user_name}</h6>
                        <p className="text-muted small">
                          {new Date(review.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="reviews-members-body">
                        <p>{review.comment}</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            </div>

            {/* Leave Comment */}
            <div className="bg-white p-3 rating-review-select-page rounded shadow-sm">
              <h6 className="mb-3">Leave Comment</h6>
              <form onSubmit={submitReview}>
                <div className="d-flex align-items-center mb-3">
                  <p className="m-0 small">Rate the Place</p>
                  <Rating
                    className="ms-auto"
                    required
                    value={newReview.rating}
                    onChange={(e, newValue) =>
                      setNewReview({ ...newReview, rating: newValue })
                    }
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label small">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                 
                    value={newReview.user_name}
                    onChange={(e) =>
                      setNewReview({ ...newReview, user_name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label small">Your Comment</label>
                  <textarea
                    className="form-control"
                    value={newReview.comment}
                    onChange={(e) =>
                      setNewReview({ ...newReview, comment: e.target.value })
                    }
                    required
                  />
                </div>
                {error && (
                  <div className="alert alert-warning" role="alert">
                    {error}
                  </div>
                )}
                <button type="submit" className="btn btn-primary w-100">
                  Submit Comment
                </button>
              </form>
            </div>
          </div>

          {/* Cart */}
          <div className="col-md-4 pt-3">
            <div className="osahan-cart-item rounded shadow-sm overflow-hidden bg-white sticky_sidebar mb-3">
              <div className="d-flex align-items-center border-bottom osahan-cart-item-profile bg-white p-3">
                <img
                  alt="osahan"
                  src={restaurant.image}
                  style={{ width: "60px", height: "60px" }}
                  className="me-3 rounded img-fluid"
                />
                <div className="d-flex flex-column">
                  <h6 className="mb-1 fw-bold">{restaurant.name}</h6>
                  <p className="mb-0 small text-muted">{restaurant.location}</p>
                </div>
              </div>
              <div className="bg-white border-bottom py-2">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="gold-members d-flex align-items-center justify-content-between px-3 py-2 border-bottom"
                  >
                    <div className="d-flex align-items-center">
                      <div
                        className={`me-2 ${
                          item.type === "non-veg"
                            ? "text-danger"
                            : "text-success"
                        }`}
                      >
                        ·
                      </div>
                      <div className="media-body">
                        <p className="m-0">{item.name}</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="count-number float-end">
                        <button
                          type="button"
                          className="btn-sm left dec btn btn-outline-secondary"
                          onClick={() => updateCartQuantity(item.id, -1)}
                        >
                          <i className="feather-minus" />
                        </button>
                        <input
                          className="count-number-input"
                          type="text"
                          readOnly
                          value={item.quantity}
                        />
                        <button
                          type="button"
                          className="btn-sm right inc btn btn-outline-secondary"
                          onClick={() => updateCartQuantity(item.id, 1)}
                        >
                          <i className="feather-plus" />
                        </button>
                      </span>
                      <p className="text-gray mb-0 float-end ms-2 text-muted small">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="bg-white p-3 py-3 border-bottom clearfix">
                <div className="mb-3">
                  <label className="form-label small">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={userDetails.name}
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label small">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={userDetails.email}
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label small">Delivery Address</label>
                  <textarea
                    className="form-control"
                    value={userDetails.address}
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        address: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="input-group input-group-sm mb-2">
                  <input
                    placeholder="Enter promo code"
                    type="text"
                    className="form-control"
                  />
                  <button className="btn btn-primary" type="button">
                    <i className="feather-percent" /> APPLY
                  </button>
                </div>
              </div> */}
              <div className="bg-white p-3 clearfix border-bottom">
                <p className="mb-1">
                  Item Total{" "}
                  <span className="float-end text-dark">
                    ₹
                    {cart
                      .reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </span>
                </p>
                <p className="mb-1">
                  Restaurant Charges{" "}
                  <span className="float-end text-dark">₹62.8</span>
                </p>
                <p className="mb-1">
                  Delivery Fee <span className="float-end text-dark">₹10</span>
                </p>
                <hr />
                <h6 className="fw-bold mb-0">
                  TO PAY{" "}
                  <span className="float-end">
                    ₹
                    {(
                      cart.reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                      ) +
                      62.8 +
                      10
                    ).toFixed(2)}
                  </span>
                </h6>
              </div>
              <div className="p-3">
                <button
                  className="btn btn-success w-100 btn-lg"
                  onClick={() =>
                    navigate("/checkout", { state: { cart, restaurant } })
                  }
                  disabled={cart.length === 0}
                >
                  PAY ₹
                  {(
                    cart.reduce(
                      (sum, item) => sum + item.price * item.quantity,
                      0
                    ) +
                    62.8 +
                    10
                  ).toFixed(2)}
                  <i className="feather-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
