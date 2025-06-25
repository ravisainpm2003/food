import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ENDPOINT from "../utilities/ENDPOINT";
import SecurityHeaders from "../utilities/SecurityHeaders";
import axios from "axios";
import { UserContext } from "../utilities/UserContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const FoodItem = ({ item, carts, reload }) => {
  const { user } = useContext(UserContext);

  // console.log(user);

  const isProductInWishlist = carts.some((cartItem) => cartItem.id === item.id);

  const addToCart = async (action) => {
    if (!user) {
      console.log("User not logged in");
      return;
    }

    const data = new FormData();

    data.append("user_id", user.user_id);
    data.append("user_token", user.session);
    data.append("action", isProductInWishlist ? "remove" : "add");
    data.append("restaurant_id", item.id);

    // if (isProductInWishlist) {
    //   data.append('update', 'update');
    // }

    try {
      const response = await axios.post(
        `${ENDPOINT}add-favorite.php`,
        data,
        SecurityHeaders
      );
      if (response.data.status === "success") {
        reload();
        return {
          message: response.data.message,
          status: response.data.status,
        };
      }
      console.log(response.data.message || "Failed to add item");
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
    }
  };

  return (
    <Link className="col-6 col-md-4 col-lg-3 px-1">
      <div className="list-card bg-white rounded overflow-hidden position-relative shadow-sm">
        <div className="list-card-image">
          <div className="star position-absolute">
            <span className="badge text-bg-success">
              <i className="feather-star" /> {item.rating} ({item.ratings}+)
            </span>
          </div>
          <div className="favourite-heart text-danger position-absolute rounded-circle">
            {isProductInWishlist ? (
              <FavoriteIcon
                className=" text-danger bg-white rounded rounded-circle"
                onClick={() => addToCart("delete")}
              ></FavoriteIcon>
            ) : (
              <FavoriteBorderIcon
                className="text-danger bg-white rounded rounded-circle"
                onClick={() => addToCart()}
              ></FavoriteBorderIcon>
            )}
          </div>
          <div className="member-plan position-absolute">
            <span className="badge text-bg-dark">Promoted</span>
          </div>
          <Link to={`/restaurant/${item.id}`}>
            <img
              alt="#"
              src={item.image}
              className="img-fluid item-img w-100"
              style={{ height: "200px", objectFit: "cover" }}
            />
          </Link>
        </div>
        <div className="p-3 position-relative">
          <div className="list-card-body">
            <h6 className="mb-1">
              <Link to={`/restaurant/${item.id}`} className="text-black">
                {item.name}
              </Link>
            </h6>
            <p className="text-gray mb-3">{item.category}</p>
            <p className="text-gray mb-3 time">
              <span className="bg-light text-dark rounded-sm py-1 px-2">
                <i className="feather-clock" /> 15–30 min
              </span>{" "}
              <span className="float-end text-black-50"> $350 FOR TWO</span>
            </p>
          </div>
          <div className="list-card-badge">
            <span className="badge text-bg-danger">OFFER</span>{" "}
            <small> Use Coupon OSAHAN50</small>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FoodItem;
