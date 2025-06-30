import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";
import ENDPOINT from "./ENDPOINT";
import SecurityHeaders from "./SecurityHeaders";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import foodlogo from "../../pages/food-items/Canva_Fonts_For_Food_Logo_logon_-removebg-preview.png";
import PlaceIcon from "@mui/icons-material/Place";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const NavBar = () => {
  const { user, location, setLocation, security, setSecurity } =
    useContext(UserContext);
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUser = async () => {
    if (!user?.session) return;
    setIsLoading(true);
    const data = new FormData();
    data.append("user_token", user.session);
    data.append("user_id", user.user_id);
    try {
      const res = await axios.post(
        ENDPOINT + "get-account.php",
        data,
        SecurityHeaders
      );
      if (res.data.status === "success") {
        const fullName = `${res.data.data.first_name} ${res.data.data.last_name}`;
        setUserData(fullName);
        setProfilePic(res.data.data.profile_pic || "img/default-user.jpg");
        localStorage.setItem("name", JSON.stringify(fullName));
        localStorage.setItem(
          "profile",
          JSON.stringify(res.data.data.profile_pic || "img/default-user.jpg")
        );
      } else {
        setError(res.data.message || "Failed to fetch user data");
      }
    } catch (err) {
      console.error("Error fetching user data:", err);
      setError("Failed to fetch user data");
    } finally {
      setIsLoading(false);
    }
  };

  const getFavoritesCount = async () => {
    if (!user?.session) return;
    const data = new FormData();
    data.append("user_id", user.user_id);
    data.append("user_token", user.session);
    try {
      const res = await axios.post(
        ENDPOINT + "get-favorites.php",
        data,
        SecurityHeaders
      );
      if (res.data.status === "success") {
        setFavoritesCount(res.data.favorites_count || 0);
      } else {
        console.error("Failed to fetch favorites count:", res.data.message);
      }
    } catch (err) {
      console.error("Error fetching favorites count:", err);
    }
  };

  const getLocations = async () => {
    try {
      const res = await axios.get(
        ENDPOINT + "get-locations.php",
        SecurityHeaders
      );
      if (res.data.status === "success") {
        setLocations(res.data.locations);
        // Set default location if none selected
        if (!location && res.data.locations.length > 0) {
          setLocation(res.data.locations[0]);
        }
      } else {
        setError(res.data.message || "Failed to fetch locations");
      }
    } catch (err) {
      console.error("Error fetching locations:", err);
      setError("Failed to fetch locations");
    }
  };

  const handleLocationChange = (selectedLocation) => {
    setLocation(selectedLocation);
  };

  const logout = () => {
    localStorage.removeItem("client1");
    localStorage.removeItem("name");
    localStorage.removeItem("profile");
    localStorage.removeItem("location");
    setLocation(null);
    navigate("/login");
  };

  useEffect(() => {
    // Load from localStorage
    const storedUser = localStorage.getItem("name");
    const storedProfile = localStorage.getItem("profile");
    if (storedUser) setUserData(JSON.parse(storedUser));
    if (storedProfile) setProfilePic(JSON.parse(storedProfile));

    // Fetch data
    if (user?.session) {
      getUser();
      getFavoritesCount();
    }
    getLocations();
  }, [user?.session]);
  // useEffect(() => {
  //   // Update security level in localStorage
  //   localStorage.setItem('security', security);
  // }, [security]);

  // ...existing code...
  return (
    <header className="section-header">
      {error && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          {error}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      <section
        className="header-main shadow-sm"
        style={{
          background:
            "linear-gradient(90deg,rgb(198, 239, 76) 0%,rgb(250, 31, 7) 100%)",
          color: "#fff",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
        }}
      >
        <div className="container">
          <div className="row align-items-center py-2">
            <div className="col-1">
              <Link to="/" className="mb-0">
                <img
                  height={70}
                  alt="Logo"
                  src={foodlogo}
                  className="navbar-logo-img text-white"
                  style={{
                    background: "none",
                    borderRadius: "12px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }}
                />
              </Link>
            </div>
            <div className="col-3 d-flex align-items-center mt-2">
              <div className="dropdown me-1 ps-3">
                <a
                  className="text-white dropdown-toggle d-flex align-items-center py-2"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ fontWeight: 500 }}
                >
                  <PlaceIcon sx={{ fontSize: 25, color: "#fff" }} />
                  <div className="ms-2">
                    <h6 className="mb-0" style={{ fontWeight: 600 }}>
                      {location
                        ? `${location.city}, ${location.country}`
                        : "Select Location"}
                    </h6>
                  </div>
                </a>
                <div
                  className="dropdown-menu p-0 drop-loc"
                  aria-labelledby="navbarDropdown"
                >
                  <div className="p-3 border-bottom">
                    <Link to="/location" className="text-decoration-none">
                      <p className="fw-bold text-primary m-0">
                        <i className="feather-navigation" />{" "}
                        {location
                          ? `${location.city}, ${location.country}`
                          : "Choose a location"}
                      </p>
                    </Link>
                  </div>
                  <div className="filter">
                    <Link
                      to={"/location"}
                      className="p-3 h6 bg-light m-0 border-bottom"
                    >
                      Choose your location
                    </Link>
                    {locations.length === 0 ? (
                      <div className="p-3 text-muted">
                        No locations available
                      </div>
                    ) : (
                      locations.map((loc) => (
                        <div
                          className="border-bottom p-3"
                          key={loc.location_id}
                        >
                          <div className="form-check form-check-reverse m-0">
                            <input
                              type="radio"
                              id={`location-${loc.location_id}`}
                              name="location"
                              value={loc.location_id}
                              className="form-check-input"
                              checked={
                                location?.location_id === loc.location_id
                              }
                              onChange={() => handleLocationChange(loc)}
                              aria-label={`Select ${loc.city}, ${loc.country}`}
                            />
                            <label
                              className="form-check-label text-start w-100"
                              htmlFor={`location-${loc.location_id}`}
                            >
                              {loc.city}, {loc.country}
                            </label>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8 mt-2">
              <div className="d-flex align-items-center justify-content-end pe-3 gap-3">
                <Link
                  to="/search"
                  className="widget-header text-white"
                  style={{
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  <div className="icon d-flex align-items-center">
                    <SearchIcon sx={{ color: "#fff" }} />
                    <h6 className="mt-2 ps-1" style={{ fontWeight: 500 }}>
                      Search
                    </h6>
                  </div>
                </Link>
                {user?.session ? (
                  <>
                    <div className="dropdown me-2">
                      <a
                        href="#"
                        className="dropdown-toggle text-white py-2 d-block"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ fontWeight: 500 }}
                      >
                        <img
                          height={40}
                          alt="Profile"
                          src={profilePic || "img/default-user.jpg"}
                          className="rounded-circle me-2"
                          style={{
                            border: "2px solid #fff",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                          }}
                        />
                        Hi {isLoading ? "Loading..." : userData || "User"}
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link className="dropdown-item" to="/profile">
                          My account
                        </Link>
                        <a className="dropdown-item" href="/faq">
                          Delivery support
                        </a>
                        <Link className="dropdown-item" to="/contact">
                          Contact us
                        </Link>
                        <Link className="dropdown-item" to="/terms">
                          Terms of use
                        </Link>
                        <Link className="dropdown-item" to="/privacy">
                          Privacy policy
                        </Link>
                        <button className="dropdown-item" onClick={logout}>
                          Logout
                        </button>
                      </div>
                    </div>
                    <Link
                      to="/checkout"
                      className="widget-header text-white"
                      style={{ position: "relative" }}
                    >
                      <ShoppingCartIcon sx={{ color: "#fff" }} />
                    </Link>
                    <Link
                      to="/favorites"
                      className="widget-header text-white position-relative"
                    >
                      <FavoriteIcon sx={{ color: "#fff" }} />
                      {favoritesCount > 0 && (
                        <span
                          className="badge bg-danger text-white position-absolute top-0 start-100 translate-middle rounded-circle"
                          style={{ fontSize: "0.7rem" }}
                        >
                          {favoritesCount}
                        </span>
                      )}
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="widget-header text-white"
                      style={{
                        textDecoration: "none",
                        fontWeight: 500,
                        transition: "color 0.2s",
                      }}
                    >
                      <div className="icon d-flex align-items-center">
                        <PersonIcon sx={{ color: "#fff" }} />
                        <h6 className="mt-2 ps-2">Sign in</h6>
                      </div>
                    </Link>
                    <Link
                      to="/signup"
                      className="widget-header text-white"
                      style={{
                        textDecoration: "none",
                        fontWeight: 500,
                        transition: "color 0.2s",
                      }}
                    >
                      <div className="icon d-flex align-items-center">
                        <PersonAddIcon sx={{ color: "#fff" }} />
                        <h6 className="mt-2 ps-2">Sign up</h6>
                      </div>
                    </Link>
                  </>
                )}
                <div className="ms-3">
                  <select
                    value={security}
                    onChange={(e) => setSecurity(e.target.value)}
                    className="form-select"
                    aria-label="Security Level"
                    style={{
                      background: "#fff",
                      color: "#ff5722",
                      border: "1px solid #ff9800",
                      fontWeight: 500,
                    }}
                  >
                    <option value="Low">Low</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Imposable">Imposable</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
  // ...existing code...
};

export default NavBar;
