import axios from "axios";
import React, { use, useContext, useEffect, useState } from "react";
import ENDPOINT from "../components/utilities/ENDPOINT";
import SecurityHeaders from "../components/utilities/SecurityHeaders";
import { UserContext } from "../components/utilities/UserContext";
import FoodItem from "../components/products/FoodItem";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";

const Trending = ({ limit }) => {
  const [foodItems, setFoodItems] = useState([]);
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user, location } = useContext(UserContext);
  const [skelton, setSkelton] = useState([1, 2, 3, 4, 5]);
  const params = useParams();

  const getFoodItems = async () => {
    setLoading(true);
    setError(null);
    const data = new FormData();
    data.append("product_type", params.category ? params.category : "all");
    if (limit) {
      data.append("limit", limit);
    }
    data.append("location_id", location?.location_id);

    try {
      const res = await axios.post(
        ENDPOINT + "get-meals.php",
        data,
        SecurityHeaders
      );
      if (res.data.status === "success") {
        setFoodItems(res.data.data || []);
      } else {
        setError(res.data.message || "Failed to fetch products");
      }
    } catch (error) {
      setError(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  const getCartItems = async () => {
    if (!user || !user.user_id || !user.session) {
      setCarts([]);
      return;
    }
    const data = new FormData();
    data.append("user_id", user.user_id);
    data.append("user_token", user.session);
    try {
      const res = await axios.post(
        ENDPOINT + "get-carts.php",
        data,
        SecurityHeaders
      );
      if (res.data.status === "success") {
        setCarts(res.data.data || []);
      } else {
        setError(res.data.message || "Failed to fetch cart");
        setCarts([]);
      }
    } catch (error) {
      setError(error.response?.data?.message || error.message);
      setCarts([]);
    }
  };

  useEffect(() => {
    getFoodItems();
    getCartItems();
  }, [limit, user]);

  return (
    <>
      <div className="d-none">
        <div className="bg-primary p-3 d-flex align-items-center">
          <a className="toggle togglew toggle-2" href="#">
            <span />
          </a>
          <h4 className="fw-bold m-0 text-white">Trending</h4>
        </div>
      </div>
      <div className="osahan-trending">
        <div className="container">
          <div className="most_popular py-5">
            <div className="d-flex align-items-center mb-4">
              <h3 className="fw-bold text-dark mb-0">Trending</h3>
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#filters"
                className="ms-auto btn btn-primary"
              >
                Filters
              </a>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            {loading ? (
              <div className="row g-4 mb-4">
                {skelton.map(() => (
                  <div className="col-6 col-md-4 col-lg-3 px-1">
                    <Skeleton
                      variant="rectangular"
                      className="col-12"
                      height={250}
                    />
                  </div>
                ))}
              </div>
            ) : foodItems.length > 0 ? (
              <div className="row g-4 mb-4">
                {foodItems.map((item) => (
                  <FoodItem
                    key={item.id}
                    item={item}
                    carts={carts}
                    reload={getCartItems}
                  />
                ))}
              </div>
            ) : (
              <div className="col-12 text-center">No Products Found</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
