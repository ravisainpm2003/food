import React, { useContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import debounce from "lodash.debounce";
import { UserContext } from "../components/utilities/UserContext";
import ENDPOINT from "../components/utilities/ENDPOINT";
import SecurityHeaders from "../components/utilities/SecurityHeaders";
import { Skeleton } from "@mui/material";
import Rating from "@mui/material/Rating";

const Search = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [disheskelton, setDisheskelton] = useState([1, 2, 3, 4]);

  const security = localStorage.getItem('security')
  // console.log('Security Level:', security);
  let API = '';

  const [csrfToken, setCsrfToken] = useState('');
  const fetchCsrfToken = () => {
    axios.get(ENDPOINT + 'get-csrf-token.php', SecurityHeaders)
      .then(res => {
        if (res.data.csrf_token) {
          setCsrfToken(res.data.csrf_token);
          // console.log('CSRF Token Fetched:', res.data.csrf_token);
        } else {
          console.error('No CSRF token in response:', res.data);
          // setOpen({ isOpen: true, message: 'Failed to fetch CSRF token', type: 'error' });
        }
      })
      .catch(err => {
        console.error('CSRF token fetch failed:', err);
        // setOpen({ isOpen: true, message: 'Failed to fetch CSRF token', type: 'error' });
      });
  }

  useEffect(() => {

    if (security === 'Imposable') {
      fetchCsrfToken();
    }
    // Perform initial search with empty query to load all data
  }, [query]);


  const performSearch = useCallback(
    async (searchQuery) => {
      let API = ''; // <-- Move here
      switch (security) {
        case 'High':
          API = 'search-levels/high-search.php';
          break;
        case 'Medium':
          API = 'search-levels/medium-search.php';
          break;
        case 'Imposable':
          API = 'search-levels/impossible-search.php';
          break;
        case 'Low':
        default:
          API = 'search-levels/low-search.php';
          break;
      }

      if (!user?.user_id || !user?.session) {
        setError("Please log in to search");
        return;
      }
      setLoading(true);
      try {
        const data = new FormData();
        data.append("query", searchQuery);
        data.append("user_id", user.user_id);
        data.append("user_token", user.session);
        if (security == 'Imposable') {
          data.append('csrf_token', csrfToken);
        }
        const res = await axios.post(
          ENDPOINT + API,
          data,
          SecurityHeaders
        );
        if (res.data.status === "success") {
          setRestaurants(res.data.restaurants);
          setDishes(res.data.dishes);
          setError("");
          setLoading(false);
        } else {
          setError("Failed to search: " + res.data.message);
        }
      } catch (err) {
        console.error("Search error:", err);
        setError("Failed to search");
      } finally {
        setLoading(false);
      }
    },
    [user, security, csrfToken] // <-- Add security and csrfToken
  );

  const debouncedSearch = useCallback(
    debounce((value) => {
      performSearch(value);
    }, 500),
    [performSearch]
  );

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  const toggleFavorite = async (e, restaurantId, isFavorite) => {
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
      data.append("action", isFavorite ? "remove" : "add");
      const res = await axios.post(
        ENDPOINT + "add-favorite.php",
        data,
        SecurityHeaders
      );
      if (res.data.status === "success") {
        setRestaurants((prev) =>
          prev.map((r) =>
            r.restaurant_id === restaurantId
              ? { ...r, is_favorite: isFavorite ? 0 : 1 }
              : r
          )
        );
      } else {
        setError("Failed to update favorite: " + res.data.message);
      }
    } catch (err) {
      console.error("Favorite error:", err);
      setError("Failed to update favorite");
    }
  };

  useEffect(() => {
    if (security === 'Imposable') {
      if (csrfToken) {
        setTimeout(() => {
          performSearch('');
        }, 1000);
      }
    } else {
      performSearch('');
    }
  }, [performSearch, security, csrfToken]);



  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <div>
      <div className="">
        <div className="bg-primary p-3 d-flex align-items-center">
          <a className="toggle togglew toggle-2" href="#">
            <span />
          </a>
          <h4 className="fw-bold m-0 text-white">Search</h4>
        </div>
      </div>
      <div className="osahan-popular">
        <div className="container">
          <div className="search py-5">
            <div className="input-group bg-white rounded-pill border mb-4">
              <input
                type="text"
                className="form-control form-control-lg bg-transparent border-0 rounded-0"
                id="inlineFormInputGroup"
                value={query}
                onChange={handleSearchChange}
                placeholder="Search for restaurants or dishes..."
              />
              <button
                className="btn bg-white text-primary bg-transparent border-0 rounded-0"
                type="button"
              >
                <i className="feather-search" />
              </button>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active border-0 bg-light text-dark rounded"
                  id="home-tab"
                  data-bs-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  <i className="feather-home me-2" />
                  Restaurants ({restaurants.length})
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link border-0 bg-light text-dark rounded ms-3"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  <i className="feather-disc me-2" />
                  Dishes ({dishes.length})
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="container my-4 p-0">
                  {loading ? (
                    <div className="row g-4 col-12">
                      {disheskelton.map(() => (
                        <div
                          className="col-lg-3 col-md-6 col-12"
                          key={Math.random()}
                        >
                          <Skeleton
                            variant="rectangular"
                            className="col-12 "
                            height={250}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="row g-4">
                      {restaurants.map((restaurant) => (
                        <div
                          className="col-lg-3 col-md-6 col-12"
                          key={restaurant.restaurant_id}
                        >
                          <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                              <div className="star position-absolute">
                                <span className="badge text-bg-success">
                                  <i className="feather-star" />{" "}
                                  {restaurant.rating} ({restaurant.review_count}
                                  +)
                                </span>
                              </div>
                              <div className="favourite-heart text-danger position-absolute rounded-circle">
                                <a
                                  href="#"
                                  onClick={(e) =>
                                    toggleFavorite(
                                      e,
                                      restaurant.restaurant_id,
                                      restaurant.is_favorite
                                    )
                                  }
                                >
                                  <i
                                    className={`feather-heart ${restaurant.is_favorite
                                        ? "text-danger"
                                        : ""
                                      }`}
                                  />
                                </a>
                              </div>
                              {restaurant.is_promoted && (
                                <div className="member-plan position-absolute">
                                  <span className="badge text-bg-dark">
                                    Promoted
                                  </span>
                                </div>
                              )}
                              <a
                                href={`/restaurant/${restaurant.restaurant_id}`}
                              >
                                <img
                                  alt={restaurant.name}
                                  src={restaurant.image}
                                  className="img-fluid item-img w-100"
                                  style={{ height: "201px", objectFit: "cover" }}
                                />
                              </a>
                            </div>
                            <div className="p-3 position-relative">
                              <div className="list-card-body">
                                <h6 className="mb-1">
                                  <a
                                    href={`/restaurant/${restaurant.restaurant_id}`}
                                    className="text-black"
                                  >
                                    {restaurant.name}
                                  </a>
                                </h6>
                                <p className="text-gray mb-1 small">
                                  • {restaurant.cuisine}{" "}
                                  {restaurant.is_veg ? "• Pure veg" : ""}
                                </p>
                                <p className="text-gray mb-1 rating"></p>
                               
                              </div>
                             <div className="d-flex justify-content-between align-items-center">
                               <div className="list-card-badge">
                                <span
                                  className={`badge text-bg-${restaurant.offer ? "danger" : "success"
                                    }`}
                                >
                                  OFFER
                                </span>{" "}
                                <small>{restaurant.offer || "65% off"}</small>
                              </div>
                          
                             </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row d-flex align-items-center justify-content-center py-5">
                  {loading ? (
                    <div className="text-center py-5">
                      <div className="spinner-border" role="status"></div>
                    </div>
                  ) : dishes.length === 0 ? (
                    <div className="col-md-4 py-5">
                      <div className="text-center py-5">
                        <p className="h4 mb-4">
                          <i className="feather-search bg-primary text-white rounded p-2" />
                        </p>
                        <p className="fw-bold text-dark h5">Nothing found</p>
                        <p>
                          We could not find any dishes that match your search
                          request, please try again.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="row g-4">
                      {dishes.map((dish) => (
                        <div
                          className="col-lg-3 col-md-6 col-12"
                          key={dish.menu_item_id}
                        >
                          <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                            <div className="list-card-image">
                              <a href={`/restaurant/${dish.restaurant_id}`}>
                                <img
                                  alt={dish.name}
                                  src={dish.image}
                                  className="img-fluid item-img w-100"
                                />
                              </a>
                            </div>
                            <div className="p-3 position-relative">
                              <div className="list-card-body">
                                <h6 className="mb-1">
                                  <a
                                    href={`/restaurant/${dish.restaurant_id}`}
                                    className="text-black"
                                  >
                                    {dish.name}
                                  </a>
                                </h6>
                                <p className="text-gray mb-1 small">
                                  {dish.restaurant_name} • {dish.type}
                                </p>
                                <p className="text-gray mb-1">
                                  ${dish.price.toFixed(2)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="osahan-menu-fotter fixed-bottom bg-white px-3 py-2 text-center d-none">
          <div className="row">
            <div className="col">
              <a
                href="/home"
                className="text-dark small fw-bold text-decoration-none"
              >
                <p className="h4 m-0">
                  <i className="feather-home" />
                </p>
                Home
              </a>
            </div>
            <div className="col selected">
              <a
                href="/trending"
                className="text-danger small fw-bold text-decoration-none"
              >
                <p className="h4 m-0">
                  <i className="feather-map-pin text-danger" />
                </p>
                Trending
              </a>
            </div>
            <div className="col bg-white rounded-circle mt-n4 px-3 py-2">
              <div className="bg-danger rounded-circle mt-n0 shadow">
                <a
                  href="/checkout"
                  className="text-white small fw-bold text-decoration-none"
                >
                  <i className="feather-shopping-cart" />
                </a>
              </div>
            </div>
            <div className="col">
              <a
                href="/favorites"
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
                href="/profile"
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
      </div>
    </div>
  );
};

export default Search;
