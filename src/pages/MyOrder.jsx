import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  CircularProgress,
  Skeleton,
} from "@mui/material";
import { UserContext } from "../components/utilities/UserContext";
import ENDPOINT from "../components/utilities/ENDPOINT";
import SecurityHeaders from "../components/utilities/SecurityHeaders";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Skelton from "../components/skelton/Skelton";

const MyOrder = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [tabValue, setTabValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [load, setLoad] = useState("");
  const [skelton, setSkelton] = useState([1, 2, 3, 4, 5]);

  const getOrders = async (tab) => {
    setLoading(true);
    try {
      const data = new FormData();

      data.append("user_token", user.session);
      data.append("user_id", user.user_id);
      data.append(
        "order_status",
        tab === 2 ? "delivered" : tab === 0 ? "preparing" : "cancelled"
      );
      const res = await axios.post(
        ENDPOINT + "get-orders.php",
        data,
        SecurityHeaders
      );
      if (res.data.status === "success") {
        setList(res.data.data);
        setError("");
      } else {
        setError("Failed to load orders: " + res.data.message);
      }
    } catch (err) {
      console.error("Get orders error:", err);
      setError("Failed to load orders");
    } finally {
      setLoading(false);
    }
  };

  // console.log(list);
  const cancelOrder = async (orderId) => {
    if (!window.confirm("Are you sure you want to cancel this order?")) return;
    try {
      const data = new FormData();
      data.append("order_id", orderId);
      data.append("user_id", user.user_id);
      data.append("user_token", user.session);
      const res = await axios.post(
        ENDPOINT + "cancel-order.php",
        data,
        SecurityHeaders
      );
      if (res.data.status === "success") {
        setTabValue(1);
        getOrders();
      } else {
        setError("Failed to cancel order: " + res.data.message);
      }
    } catch (err) {
      console.error("Cancel order error:", err);
      setError("Failed to cancel order");
    }
  };
  console.log(tabValue);
  const reorder = async (order) => {
    try {
      // Clear existing cart
      const clearData = new FormData();
      clearData.append("user_id", user.user_id);
      await axios.post(ENDPOINT + "clear-cart.php", clearData, SecurityHeaders);

      // Add order items to cart
      for (const item of order.items) {
        const data = new FormData();
        data.append("user_id", user.user_id);
        data.append("restaurant_id", order.restaurant_id);
        data.append("menu_item_id", item.menu_item_id);
        data.append("quantity", item.quantity);
        data.append("price", item.price);
        const res = await axios.post(
          ENDPOINT + "add-cart.php",
          data,
          SecurityHeaders
        );
        if (res.data.status !== "success") {
          throw new Error("Failed to add item to cart");
        }
      }

      // Navigate to checkout with restaurant and cart data
      navigate("/checkout", {
        state: {
          cart: order.items.map((item) => ({
            id: item.menu_item_id,
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            restaurant_id: order.restaurant_id,
          })),
          restaurant: {
            id: order.restaurant_id,
            name: order.restaurant_name,
            location: order.restaurant_location,
          },
        },
      });
    } catch (err) {
      console.error("Reorder error:", err);
      setError("Failed to reorder: " + err.message);
    }
  };

  useEffect(() => {
    getOrders(tabValue);
  }, [user, tabValue]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const filteredOrders = (status) => {
    if (status === "completed") {
      return list.filter((order) => order.order_status === "delivered");
    } else if (status === "preparing") {
      return list.filter((order) => order.order_status === "preparing");
    } else {
      return list.filter((order) =>
        ["cancelled", "payment_failed"].includes(order.order_status)
      );
    }
  };

  const getStatusChip = (status) => {
    switch (status) {
      case "delivered":
        return (
          <Chip label="Delivered" color="success" icon={<CheckCircleIcon />} />
        );
      case "preparing":
        return (
          <Chip label="On Process" color="warning" icon={<AccessTimeIcon />} />
        );
      case "canceled":
        return <Chip label="Canceled" color="error" icon={<CancelIcon />} />;
      case "payment_failed":
        return (
          <Chip label="Payment Failed" color="error" icon={<CancelIcon />} />
        );
      default:
        return <Chip label={status} />;
    }
  };

  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      <Box
        sx={{
          bgcolor: "primary.main",
          p: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" color="white" fontWeight="bold">
          My Orders
        </Typography>
      </Box>
      <Box sx={{ p: 3 }}>
        <Box sx={{ maxWidth: 1200, mx: "auto" }}>
          {error && (
            <Typography color="error" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "25%" } }}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                orientation="vertical"
                sx={{
                  bgcolor: "white",
                  borderRadius: 1,
                  boxShadow: 1,
                  ".MuiTab-root": { py: 2, px: 3, alignItems: "flex-start" },
                }}
              >
                <Tab
                  label="On Progress"
                  icon={<AccessTimeIcon sx={{ color: "warning.main" }} />}
                  iconPosition="start"
                />

                <Tab
                  label="Canceled"
                  icon={<CancelIcon sx={{ color: "error.main" }} />}
                  iconPosition="start"
                />
                <Tab
                  label="Completed"
                  icon={<CheckCircleIcon sx={{ color: "success.main" }} />}
                  iconPosition="start"
                />
              </Tabs>
            </Box>
            <Box sx={{ width: { xs: "100%", md: "75%" } }}>
              {loading ? (
                skelton.map(() => (
                  <div>
                    <Skeleton
                      variant="rectangular"
                      className="col-12"
                      height={40}
                    />
                  </div>
                ))
              ) : (
                <>
                  {tabValue === 2 && (
                    <OrderList
                      orders={filteredOrders("completed")}
                      getStatusChip={getStatusChip}
                      reorder={reorder}
                    />
                  )}
                  {tabValue === 0 && (
                    <OrderList
                      orders={filteredOrders("preparing")}
                      getStatusChip={getStatusChip}
                      cancelOrder={cancelOrder}
                      trackOrder={(orderId) =>
                        navigate(`/status-on-process/${orderId}`)
                      }
                    />
                  )}
                  {tabValue === 1 && (
                    <OrderList
                      orders={filteredOrders("cancelled")}
                      getStatusChip={getStatusChip}
                    />
                  )}
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const OrderList = ({
  orders,
  getStatusChip,
  reorder,
  cancelOrder,
  trackOrder,
}) => {
  return (
    <Box>
      {orders.length === 0 ? (
        <></>
      ) : (
        orders.map((order) => (
          <Card key={order.order_id} sx={{ mb: 2, boxShadow: 1 }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 80, height: 80, borderRadius: 1 }}
                  image={`img/popular${(order.order_id % 6) + 1}.png`} // Dynamic image based on order_id
                  alt={order.restaurant_name}
                />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" fontWeight="bold">
                    <a
                      href={`/restaurant/${order.restaurant_id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {order.restaurant_name}
                    </a>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {order.restaurant_location}
                  </Typography>
                  <Typography variant="body2">
                    ORDER #{order.order_id}
                  </Typography>
                  <Typography variant="body2">
                    <a
                      href={`/status/${order.order_id}`}
                      style={{ color: "primary.main" }}
                    >
                      View Details
                    </a>
                  </Typography>
                </Box>
                <Box sx={{ textAlign: { xs: "left", sm: "right" } }}>
                  {getStatusChip(order.order_status)}
                  <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                    <AccessTimeIcon
                      fontSize="small"
                      sx={{ verticalAlign: "middle", mr: 0.5 }}
                    />
                    {new Date(order.order_date).toLocaleDateString()}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                }}
              >
                <Box sx={{ flex: 1 }}>
                  {order.items.map((item, index) => (
                    <Typography key={index} variant="body2" fontWeight="bold">
                      {item.name} x {item.quantity}
                    </Typography>
                  ))}
                </Box>
                <Box sx={{ textAlign: { xs: "left", sm: "right" } }}>
                  <Typography variant="body2" color="text.secondary">
                    Total Payment
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    ₹{order.total_amount.toFixed(2)}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    flexWrap: "wrap",
                    justifyContent: { xs: "flex-start", sm: "flex-end" },
                  }}
                >
                  {order.order_status === "delivered" && reorder && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => reorder(order)}
                    >
                      Reorder
                    </Button>
                  )}
                  {order.order_status === "preparing" && trackOrder && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => trackOrder(order.order_id)}
                    >
                      Track
                    </Button>
                  )}
                  {order.order_status === "pending" && cancelOrder && (
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => cancelOrder(order.order_id)}
                    >
                      Cancel
                    </Button>
                  )}
                  <Button variant="outlined" color="primary" onClick={() => ""}>
                    Help
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
};

export default MyOrder;
