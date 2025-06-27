import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from 'axios';
import ENDPOINT from './ENDPOINT';
import SecurityHeaders from './SecurityHeaders';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
  const { user, location, setLocation,security,setSecurity } = useContext(UserContext);
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
    data.append('user_token', user.session);
    data.append('user_id', user.user_id);
    try {
      const res = await axios.post(ENDPOINT + 'get-account.php', data, SecurityHeaders);
      if (res.data.status === 'success') {
        const fullName = `${res.data.data.first_name} ${res.data.data.last_name}`;
        setUserData(fullName);
        setProfilePic(res.data.data.profile_pic || 'img/default-user.jpg');
        localStorage.setItem('name', JSON.stringify(fullName));
        localStorage.setItem('profile', JSON.stringify(res.data.data.profile_pic || 'img/default-user.jpg'));
      } else {
        setError(res.data.message || 'Failed to fetch user data');
      }
    } catch (err) {
      console.error('Error fetching user data:', err);
      setError('Failed to fetch user data');
    } finally {
      setIsLoading(false);
    }
  };

  const getFavoritesCount = async () => {
    if (!user?.session) return;
    const data = new FormData();
    data.append('user_id', user.user_id);
    data.append('user_token', user.session);
    try {
      const res = await axios.post(ENDPOINT + 'get-favorites.php', data, SecurityHeaders);
      if (res.data.status === 'success') {
        setFavoritesCount(res.data.favorites_count || 0);
      } else {
        console.error('Failed to fetch favorites count:', res.data.message);
      }
    } catch (err) {
      console.error('Error fetching favorites count:', err);
    }
  };

  const getLocations = async () => {
    try {
      const res = await axios.get(ENDPOINT + 'get-locations.php', SecurityHeaders);
      if (res.data.status === 'success') {
        setLocations(res.data.locations);
        // Set default location if none selected
        if (!location && res.data.locations.length > 0) {
          setLocation(res.data.locations[0]);
        }
      } else {
        setError(res.data.message || 'Failed to fetch locations');
      }
    } catch (err) {
      console.error('Error fetching locations:', err);
      setError('Failed to fetch locations');
    }
  };

  const handleLocationChange = (selectedLocation) => {
    setLocation(selectedLocation);
  };

  const logout = () => {
    localStorage.removeItem('client1');
    localStorage.removeItem('name');
    localStorage.removeItem('profile');
    localStorage.removeItem('location');
    setLocation(null);
    navigate('/login');
  };

  
  useEffect(() => {
    // Load from localStorage
    const storedUser = localStorage.getItem('name');
    const storedProfile = localStorage.getItem('profile');
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


  return (
    <header className="section-header">
      {error && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          {error}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      )}
      <section className="header-main shadow-sm bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-1">
              <Link to="/" className="brand-wrap mb-0">
                <img alt="Logo" className="img-fluid" src="img/logo_web.png" />
              </Link>
            </div>
            <div className="col-3 d-flex align-items-center m-none">
              <div className="dropdown me-3">
                <a
                  className="text-dark dropdown-toggle d-flex align-items-center py-3"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div>
                    <i className="feather-map-pin me-2 bg-light rounded-pill p-2 icofont-size" />
                  </div>
                  <div>
                    <p className="text-muted mb-0 small">Select Location</p>
                    {location ? `${location.city}, ${location.country}` : 'Select a location...'}
                  </div>
                </a>
                <div className="dropdown-menu p-0 drop-loc" aria-labelledby="navbarDropdown">
                  <div className="p-3 border-bottom">
                    <Link to="/location" className="text-decoration-none">
                      <p className="fw-bold text-primary m-0">
                        <i className="feather-navigation" /> {location ? `${location.city}, ${location.country}` : 'Choose a location'}
                      </p>
                    </Link>
                  </div>
                  <div className="filter">
                    <Link to={'/location'} className="p-3 h6 bg-light m-0 border-bottom">Choose your location</Link>
                    {locations.length === 0 ? (
                      <div className="p-3 text-muted">No locations available</div>
                    ) : (
                      locations.map((loc) => (
                        <div className="border-bottom p-3" key={loc.location_id}>
                          <div className="form-check form-check-reverse m-0">
                            <input
                              type="radio"
                              id={`location-${loc.location_id}`}
                              name="location"
                              value={loc.location_id}
                              className="form-check-input"
                              checked={location?.location_id === loc.location_id}
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
            <div className="col-8">
              <div className="d-flex align-items-center justify-content-end pe-5">
                <Link to="/search" className="widget-header me-4 text-dark">
                  <div className="icon d-flex align-items-center">
                    <i className="feather-search h6 me-2 mb-0" /> <span>Search</span>
                  </div>
                </Link>
                <Link to="/offer" className="widget-header me-4 text-white btn bg-primary m-none">
                  <div className="icon d-flex align-items-center">
                    <i className="feather-disc h6 me-2 mb-0" /> <span>Offers</span>
                  </div>
                </Link>
                {user?.session ? (
                  <>
                    <div className="dropdown me-4 m-none">
                      <a
                        href="#"
                        className="dropdown-toggle text-dark py-3 d-block"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          height={50}
                          alt="Profile"
                          src={profilePic || 'img/default-user.jpg'}
                          className="rounded-circle me-2"
                        />
                        Hi {isLoading ? 'Loading...' : userData || 'User'}
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
                    <Link to="/checkout" className="widget-header me-4 text-dark">
                      <div className="icon d-flex align-items-center">
                        <ShoppingCartIcon className='text-primary' /> 
                      </div>
                    </Link>
                    <Link to="/favorites" className="widget-header text-dark position-relative">
                      <FavoriteIcon className="text-primary" />
                      {favoritesCount > 0 && (
                        <span className="badge bg-danger text-white position-absolute top-0 start-100 translate-middle rounded-circle">
                          {favoritesCount}
                        </span>
                      )}
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="widget-header me-4 text-dark m-none">
                      <div className="icon d-flex align-items-center">
                        <i className="feather-user h6 me-2 mb-0" /> <span>Sign in</span>
                      </div>
                    </Link>
                    <Link to="/signup" className="widget-header me-4 text-dark">
                      <div className="icon d-flex align-items-center">
                        <i className="feather-user-plus h6 me-2 mb-0" /> <span>Sign up</span>
                      </div>
                    </Link>
                  </>
                )}
            <div className="col-2 ms-2">
                 <select value={security} onChange={(e)=> setSecurity(e.target.value)} className="form-select" aria-label="Security Level">
                <option value="Low">Low</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Imposable"> Imposable</option>

               </select>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default NavBar;