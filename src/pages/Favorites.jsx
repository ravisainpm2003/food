import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../components/utilities/UserContext";
import ENDPOINT from "../components/utilities/ENDPOINT";
import SecurityHeaders from "../components/utilities/SecurityHeaders";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Skeleton } from "@mui/material";

const Favorites = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [skelton, setSkelton] = useState([1, 2, 3, 4, 5]);

  const fetchFavorites = async () => {
    if (!user?.user_id || !user?.session) {
      setError("Please log in to view favorites");
      return;
    }
    setLoading(true);
    try {
      const data = new FormData();
      data.append("user_id", user.user_id);
      data.append("user_token", user.session);
      const res = await axios.post(
        ENDPOINT + "get-favorites.php",
        data,
        SecurityHeaders
      );
      if (res.data.status === "success") {
        setRestaurants(res.data.restaurants);
        setError("");
      } else {
        setError("Failed to load favorites: " + res.data.message);
      }
    } catch (err) {
      console.error("Fetch favorites error:", err);
      setError("Failed to load favorites");
    } finally {
      setLoading(false);
    }
  };

  const removeFavorite = async (e, restaurantId) => {
    e.preventDefault();
    if (!user?.user_id) {
      navigate("/login");
      return;
    }
    try {
      const data = new FormData();
      data.append("user_id", user.user_id);
      data.append("user_token", user.session);
      data.append("restaurant_id", restaurantId);
      data.append("action", "remove");
      const res = await axios.post(
        ENDPOINT + "add-favorite.php",
        data,
        SecurityHeaders
      );
      if (res.data.status === "success") {
        setRestaurants((prev) =>
          prev.filter((r) => r.restaurant_id !== restaurantId)
        );
      } else {
        setError("Failed to remove favorite: " + res.data.message);
      }
    } catch (err) {
      console.error("Remove favorite error:", err);
      setError("Failed to remove favorite");
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, [user]);

  return (
    <div>
      <div className="osahan-favorites">
        <div className="d-none">
          <div className="bg-primary border-bottom p-3 d-flex align-items-center">
            <a className="toggle togglew toggle-2" href="#">
              <span />
            </a>
            <h4 className="fw-bold m-0 text-white">Favorites</h4>
          </div>
        </div>
        <div className="container most_popular py-5">
          <h2 className="fw-bold mb-3">Favorites</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          {loading ? (
            <div className="row">
              {skelton.map(() => (
                <div className="col-md-4 mb-3">
                  <Skeleton
                    variant="rectangular"
                    className="col-12"
                    height={250}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="row">
              {restaurants.map((restaurant) => (
                <div className="col-md-4 mb-3" key={restaurant.restaurant_id}>
                  <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm grid-card">
                    <div className="list-card-image">
                      <div className="star position-absolute">
                        <span className="badge text-bg-success">
                          <i className="feather-star" /> {restaurant.rating} (
                          {restaurant.review_count}+)
                        </span>
                      </div>
                      <div className="favourite-heart text-danger position-absolute rounded-circle">
                        <a
                          href="#"
                          onClick={(e) =>
                            removeFavorite(e, restaurant.restaurant_id)
                          }
                        >
                          <FavoriteIcon className="text-danger bg-white rounded-circle" />
                        </a>
                      </div>
                      {restaurant.is_promoted && (
                        <div className="member-plan position-absolute">
                          <span className="badge text-bg-dark">Promoted</span>
                        </div>
                      )}
                      <Link to={`/restaurant/${restaurant.restaurant_id}`}>
                        <img
                          alt={restaurant.name}
                          src={restaurant.image}
                          className="img-fluid item-img w-100"
                        />
                      </Link>
                    </div>
                    <div className="p-3 position-relative">
                      <div className="list-card-body">
                        <h6 className="mb-1">
                          <Link
                            to={`/restaurant/${restaurant.restaurant_id}`}
                            className="text-black"
                          >
                            {restaurant.name}
                          </Link>
                        </h6>
                        <p className="text-gray mb-3">
                          {restaurant.cuisine}{" "}
                          {restaurant.is_veg ? "• Pure veg" : ""}
                        </p>
                        <p className="text-gray mb-3 time">
                          <span className="bg-light text-dark rounded-sm py-1 px-2">
                            <i className="feather-clock" />{" "}
                            {restaurant.delivery_time}
                          </span>{" "}
                          <span className="float-end text-black-50">
                            ${restaurant.cost_for_two} FOR TWO
                          </span>
                        </p>
                      </div>
                      <div className="list-card-badge">
                        <span
                          className={`badge text-bg-${
                            restaurant.offer.includes("OSAHAN50")
                              ? "danger"
                              : "success"
                          }`}
                        >
                          OFFER
                        </span>{" "}
                        <small>{restaurant.offer}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="osahan-menu-fotter fixed-bottom bg-white px-3 py-2 text-center d-none">
          <div className="row">
            <div className="col">
              <Link
                to="/home"
                className="text-dark small fw-bold text-decoration-none"
              >
                <p className="h4 m-0">
                  <i className="feather-home text-dark" />
                </p>
                Home
              </Link>
            </div>
            <div className="col">
              <Link
                to="/most_popular"
                className="text-dark small fw-bold text-decoration-none"
              >
                <p className="h4 m-0">
                  <i className="feather-map-pin" />
                </p>
                Trending
              </Link>
            </div>
            <div className="col bg-white rounded-circle mt-n4 px-3 py-2">
              <div className="bg-danger rounded-circle mt-n0 shadow">
                <Link
                  to="/checkout"
                  className="text-white small fw-bold text-decoration-none"
                >
                  <i className="feather-shopping-cart" />
                </Link>
              </div>
            </div>
            <div className="col selected">
              <Link
                to="/favorites"
                className="text-danger small fw-bold text-decoration-none"
              >
                <p className="h4 m-0">
                  <i className="feather-heart" />
                </p>
                Favorites
              </Link>
            </div>
            <div className="col">
              <Link
                to="/profile"
                className="text-dark small fw-bold text-decoration-none"
              >
                <p className="h4 m-0">
                  <i className="feather-user" />
                </p>
                Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
