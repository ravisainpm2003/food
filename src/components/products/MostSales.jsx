import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ENDPOINT from '../utilities/ENDPOINT';
import SecurityHeaders from '../utilities/SecurityHeaders';
import axios from 'axios';
import { UserContext } from '../utilities/UserContext';


import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const MostSales = () => {
  const { user,location } = useContext(UserContext);
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);
  const [totalRestaurants, setTotalRestaurants] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchMostSales = async () => {
    if (!user?.user_id || !user?.session) {
      setError('Please log in to view most sales');
      return;
    }
    setLoading(true);
    try {
      const data = new FormData();
      data.append('user_id', user.user_id);
      data.append('user_token', user.session);
      data.append('location_id', location?.location_id || '');
      const res = await axios.post(ENDPOINT + 'get-most-sales.php', data, SecurityHeaders);
      if (res.data.status === 'success') {
        setRestaurants(res.data.restaurants);
        setTotalRestaurants(res.data.total_restaurants);
        setError('');
      } else {
        setError('Failed to load most sales: ' + res.data.message);
      }
    } catch (err) {
      console.error('Fetch most sales error:', err);
      setError('Failed to load most sales');
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = async (e, restaurantId, isFavorite) => {
    e.preventDefault();
    if (!user?.user_id) {
      navigate('/login');
      return;
    }
    try {
      const data = new FormData();
      data.append('user_id', user.user_id);
      data.append('user_token', user.session);
      data.append('restaurant_id', restaurantId);
      data.append('action', isFavorite ? 'remove' : 'add');
      const res = await axios.post(ENDPOINT + 'add-favorite.php', data, SecurityHeaders);
      if (res.data.status === 'success') {
        setRestaurants(prev =>
          prev.map(r =>
            r.restaurant_id === restaurantId ? { ...r, is_favorite: isFavorite ? 0 : 1 } : r
          )
        );
      } else {
        setError('Failed to update favorite: ' + res.data.message);
      }
    } catch (err) {
      console.error('Favorite error:', err);
      setError('Failed to update favorite');
    }
  };

  useEffect(() => {
    fetchMostSales();
  }, [user]);

  return (
    <>
      <div className="pt-2 pb-3 title d-flex align-items-center">
        <h5 className="m-0">Most Sales</h5>
        <Link className="fw-bold ms-auto" to="/restaurants">
          {totalRestaurants} places <i className="feather-chevrons-right" />
        </Link>
      </div>
      <div className="most_sale">
        {error && <div className="alert alert-danger">{error}</div>}
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border" role="status"></div>
          </div>
        ) : (
          <div className="row mb-3">
            {restaurants.length === 0 ? (
              <div className="col-12 text-center py-5">
                <p className="fw-bold text-dark h5">No restaurants found</p>
              </div>
            ) : (
              restaurants.map(restaurant => (
                <div className="col-md-4 mb-3" key={restaurant.restaurant_id}>
                  <div className="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                    <div className="list-card-image">
                      <div className="star position-absolute">
                        <span className="badge text-bg-success">
                          <i className="feather-star" /> {restaurant.rating} ({restaurant.review_count}+)
                        </span>
                      </div>
                      <div onClick={(e) => toggleFavorite(e, restaurant.restaurant_id, restaurant.is_favorite)} className="favourite-heart text-danger position-absolute rounded-circle">
                        
                          

                            {restaurant.is_favorite ? (
                                <FavoriteIcon className="text-danger  rounded-circle" />
                                ) : (
                                <FavoriteBorderIcon className="text-danger rounded-circle" />
                                )}
                      
                        
                      </div>
                      {restaurant.is_promoted ? (
                        <div className="member-plan position-absolute">
                          <span className="badge text-bg-dark">Promoted</span>
                        </div>
                      ):<></>}
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
                          <Link to={`/restaurant/${restaurant.restaurant_id}`} className="text-black">
                            {restaurant.name}
                          </Link>
                        </h6>
                        <p className="text-gray mb-3">
                          {restaurant.cuisine} {restaurant.is_veg ? '• Pure veg' : ''}
                        </p>
                        <p className="text-gray mb-3 time">
                          <span className="bg-light text-dark rounded-sm py-1 px-2">
                            <i className="feather-clock" /> {restaurant.delivery_time}
                          </span>{" "}
                          <span className="float-end text-black-50">
                            ${restaurant.cost_for_two} FOR TWO
                          </span>
                        </p>
                      </div>
                      <div className="list-card-badge">
                        <span className={`badge text-bg-${restaurant.offer.includes('OSAHAN50') ? 'danger' : 'success'}`}>
                          OFFER
                        </span>{" "}
                        <small>{restaurant.offer}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default MostSales;