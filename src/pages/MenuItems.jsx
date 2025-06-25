import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../components/utilities/UserContext";
import SecurityHeaders from "../components/utilities/SecurityHeaders";
import ENDPOINT from "../components/utilities/ENDPOINT";
import { Skeleton } from "@mui/material";

const MenuItems = () => {
  const params = useParams();
  const { user, location } = useContext(UserContext);
  const [menuItems, setMenuItems] = useState([]);
  const [foodType, setFoodType] = useState(params.food || "Pizza"); // Default food type
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [skelton, setSkelton] = useState([1, 2, 3, 4, 5]);

  const foodTypes = ["Pizza", "Coffee", "Burger", "Pasta", "Dessert"];

  const fetchMenuItems = async () => {
    if (!user?.user_id || !user?.session) {
      setError("Please log in to view menu items");
      return;
    }
    if (!location?.location_id) {
      setError("Please select a location to view menu items");
      return;
    }
    if (!foodType) {
      setError("Please select a food type to view menu items");
      return;
    }

    setLoading(true);
    try {
      const data = new FormData();
      data.append("user_id", user.user_id);
      data.append("user_token", user.session);
      data.append("food_type", foodType);
      data.append("location_id", location.location_id);
      const res = await axios.post(
        ENDPOINT + "get-menu-items.php",
        data,
        SecurityHeaders
      );
      if (res.data.status === "success" && Array.isArray(res.data.menu_items)) {
        setMenuItems(res.data.menu_items);
        setError("");
      } else {
        setError(
          "Failed to load menu items: " + (res.data.message || "Unknown error")
        );
      }
    } catch (err) {
      console.error("Fetch menu items error:", err);
      setError("Failed to load menu items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user && location && foodType) {
      fetchMenuItems();
    }
  }, [user, location, foodType]);

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 text-center">Explore Our Menu</h2>

      {/* Food Type Selector */}
      <div className="mb-4">
        <h6 className="fw-bold mb-3 text-center">Select Food Type</h6>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {foodTypes.map((type) => (
            <button
              key={type}
              className={`btn ${
                foodType === type ? "btn-primary" : "btn-outline-primary"
              } px-4 py-2`}
              onClick={() => setFoodType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div
          className="alert alert-danger text-center mx-auto"
          style={{ maxWidth: "600px" }}
        >
          {error}
        </div>
      )}

      {/* Loading Spinner */}
      {loading ? (
        <div className="row g-4">
          {skelton.map(() => (
            <div className="col-md-4 col-sm-6">
              <Skeleton
                variant="rectangular"
                className="col-12 "
                height={250}
              />
            </div>
          ))}
        </div>
      ) : (
        // Menu Items Grid
        <div className="row g-4">
          {menuItems.map((item) => (
            <div className="col-md-4 col-sm-6" key={item.item_id}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-img-top position-relative">
                  <div className="badge bg-success position-absolute top-0 start-0 m-2">
                    <i className="feather-star me-1" /> {item.rating} (
                    {item.review_count}+)
                  </div>
                  <Link to={`/restaurant/${item.restaurant_id}`}>
                    <img
                      src={item.item_image}
                      alt={item.item_name}
                      className="img-fluid rounded-top"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  </Link>
                </div>
                <div className="card-body">
                  <h6 className="card-title mb-2">
                    <Link
                      to={`/restaurant/${item.restaurant_id}`}
                      className="text-dark text-decoration-none"
                    >
                      {item.item_name}
                    </Link>
                  </h6>
                  <p className="text-muted small mb-1">
                    {item.restaurant_name} • ${item.price.toFixed(2)}
                  </p>
                  <p className="text-muted small">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItems;
