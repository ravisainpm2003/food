import React, { useContext, useEffect, useState } from "react";
import FoodItem from "./FoodItem";
import ENDPOINT from "../utilities/ENDPOINT";
import SecurityHeaders from "../utilities/SecurityHeaders";
import axios from "axios";
import { UserContext } from "../utilities/UserContext";
import Homeskelton from "../skelton/Homeskelton";
import { Skeleton } from "@mui/material";
import { motion } from "framer-motion";

const Mostpopulardata = ({ category, limit, type }) => {
  const [foodItems, setFoodItems] = useState([]);
  const [carts, setCarts] = useState([]);
  const { user, location } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(location.location_id);
  const getFoodItems = async () => {
    setLoading(true);
    const data = new FormData();
    data.append("category", category);
    if (limit) {
      data.append("limit", limit);
    }
    if (type) {
      data.append("type", type);
    }
    data.append("location_id", location?.location_id);

    try {
      const res = await axios.post(
        ENDPOINT + "get-meals.php",
        data,
        SecurityHeaders
      );
      // console.log(res.data);
      if (res.data.status === "success") {
        setFoodItems(res.data.data);
        setLoading(false);
      } else {
        setLoading(false);
        throw new Error(res.data.message || "Failed to fetch products");
      }
    } catch (error) {
      throw new Error(error.response?.data?.message || error.message);
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
  }, [category, limit, user]);

  const skelton = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <>
        <div className="trending-slider d-flex col-12 px-0 ">
          {loading ? (
            skelton.map(() => (
              <div className="col-6 col-md-4 col-lg-3 px-1" key={Math.random()}>
                <Skeleton
                  variant="rectangular"
                  className="col-11 "
                  height={250}
                />
              </div>
            ))
          ) : (
            <>
              {foodItems ? (
                foodItems.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: -50, scale: 0.8, rotate: -5 }} // y: -50 for top-to-bottom
                    whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 80,
                      damping: 20,
                      delay: index * 0.02,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="col-6 col-md-4 col-lg-3 px-1  "
                    key={index}
                  >
                    <FoodItem item={item} carts={carts} reload={getCartItems} />
                  </motion.div>
                ))
              ) : (
                <div className="col-12 text-center">No Products Found</div>
              )}
            </>
          )}
        </div>
      </>
    </div>
  );
};

export default Mostpopulardata;
