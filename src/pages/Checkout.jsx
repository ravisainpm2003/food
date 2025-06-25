import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Box,
  Radio,
  RadioGroup,
  FormControl,
  Typography,
  IconButton,
  TextareaAutosize,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DeleteIcon from "@mui/icons-material/Delete";
import ENDPOINT from "../components/utilities/ENDPOINT";
import SecurityHeaders from "../components/utilities/SecurityHeaders";
import { UserContext } from "../components/utilities/UserContext";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const { cart: initialCart = [], restaurant = {} } = location.state || {};

  const [cart, setCart] = useState(initialCart);
  const [addresses, setAddresses] = useState([]);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [cardDetails, setCardDetails] = useState({
    card_number: "",
    card_expiry: "",
    card_cvv: "",
    card_name: "",
  });
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [promoCode, setPromoCode] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editAddressId, setEditAddressId] = useState(null);
  const [newAddress, setNewAddress] = useState({
    address_type: "",
    address_line1: "",
    address_line2: "",
    city: "",
    state: "",
    postal_code: "",
    country: "",
    is_default: false,
  });

  const itemTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const restaurantCharges = 62.8;
  const deliveryFee = 10;
  const discount = promoCode === "SAVE50" ? itemTotal * 0.5 : 0;
  const totalAmount = (
    itemTotal +
    restaurantCharges +
    deliveryFee -
    discount
  ).toFixed(2);

  const getCart = async () => {
    try {
      const data = new FormData();
      data.append("user_token", user.session);
      const res = await axios.post(
        ENDPOINT + "get-carts2.php",
        data,
        SecurityHeaders
      );
      if (res.data.status === "success") {
        setCart(res.data.data);
      }
    } catch (err) {
      console.log("Get Cart Error: " + err);
      setError("Failed to load cart");
    }
  };

  const getAddresses = async () => {
    try {
      const data = new FormData();
      data.append("user_token", user.session);
      const res = await axios.post(
        ENDPOINT + "get-addresses.php",
        data,
        SecurityHeaders
      );
      if (res.data.status === "success") {
        setAddresses(res.data.data);
        const defaultAddress = res.data.data.find((addr) => addr.is_default);
        if (defaultAddress) {
          setSelectedAddressId(defaultAddress.id);
          setUserDetails({
            ...userDetails,
            address: `${defaultAddress.address_line1}, ${defaultAddress.city}, ${defaultAddress.state} ${defaultAddress.postal_code}, ${defaultAddress.country}`,
          });
        }
      }
    } catch (err) {
      console.log("Get Addresses Error: " + err);
      setError("Failed to load addresses");
    }
  };

  const addAddress = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("user_token", user.session);
      data.append("address_type", newAddress.address_type);
      data.append("address_line1", newAddress.address_line1);
      data.append("address_line2", newAddress.address_line2);
      data.append("city", newAddress.city);
      data.append("state", newAddress.state);
      data.append("postal_code", newAddress.postal_code);
      data.append("country", newAddress.country);
      data.append("is_default", newAddress.is_default ? "1" : "0");
      const res = await axios.post(
        ENDPOINT + "add-address.php",
        data,
        SecurityHeaders
      );
      if (res.data.status === "success") {
        getAddresses();
        resetModal();
      } else {
        setError("Failed to add address: " + res.data.message);
      }
    } catch (err) {
      console.log("Add Address Error: " + err);
      setError("An error occurred while adding the address");
    }
  };

  const updateAddress = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("user_token", user.session);
      data.append("address_id", editAddressId);
      data.append("address_type", newAddress.address_type);
      data.append("address_line1", newAddress.address_line1);
      data.append("address_line2", newAddress.address_line2);
      data.append("city", newAddress.city);
      data.append("state", newAddress.state);
      data.append("postal_code", newAddress.postal_code);
      data.append("country", newAddress.country);
      data.append("is_default", newAddress.is_default ? "1" : "0");
      const res = await axios.post(
        ENDPOINT + "update-address.php",
        data,
        SecurityHeaders
      );
      if (res.data.status === "success") {
        getAddresses();
        resetModal();
      } else {
        setError("Failed to update address: " + res.data.message);
      }
    } catch (err) {
      console.log("Update Address Error: " + err);
      setError("An error occurred while updating the address");
    }
  };

  const deleteAddress = async (addressId) => {
    if (!window.confirm("Are you sure you want to delete this address?"))
      return;
    try {
      const data = new FormData();
      data.append("address_id", addressId);
      data.append("user_token", user.session);
      const res = await axios.post(
        ENDPOINT + "delete-address.php",
        data,
        SecurityHeaders
      );
      if (res.data.status === "success") {
        getAddresses();
        if (selectedAddressId === addressId) {
          setSelectedAddressId(null);
          setUserDetails({
            ...userDetails,
            address: "",
          });
        }
      } else {
        setError("Failed to delete address: " + res.data.message);
      }
    } catch (err) {
      console.log("Delete Address Error: " + err);
      setError("An error occurred while deleting the address");
    }
  };

  const resetModal = () => {
    setNewAddress({
      address_type: "",
      address_line1: "",
      address_line2: "",
      city: "",
      state: "",
      postal_code: "",
      country: "",
      is_default: false,
    });
    setIsEditing(false);
    setEditAddressId(null);
    setOpen(false);
  };

  const handleEditAddress = (address) => {
    setIsEditing(true);
    setEditAddressId(address.id);
    setNewAddress({
      address_type: address.address_type,
      address_line1: address.address_line1,
      address_line2: address.address_line2 || "",
      city: address.city,
      state: address.state,
      postal_code: address.postal_code,
      country: address.country,
      is_default: address.is_default,
    });
    setOpen(true);
  };

  const updateCartQuantity = async (itemId, change) => {
    try {
      const item = cart.find((cartItem) => cartItem.id === itemId);
      if (!item) return;
      const newQuantity = Number(item.quantity) + Number(change);
      if (newQuantity < 0) return;
      const data = new FormData();
      data.append("user_token", user.session);
      data.append("restaurant_id", item.restaurant_id);
      data.append("menu_item_id", itemId);
      data.append("quantity", newQuantity);
      data.append("price", item.price);
      const res = await axios.post(
        ENDPOINT + "update-cart.php",
        data,
        SecurityHeaders
      );
      if (res.data.status === "success") {
        getCart();
      }
    } catch (err) {
      console.log("Update Cart Quantity Error: " + err);
      setError("Failed to update cart");
    }
  };

  const applyPromoCode = () => {
    if (promoCode === "SAVE50") {
      setError("");
    } else {
      setError("Invalid promo code");
    }
  };

  const placeOrder = async () => {
    try {
      if (
        !cardDetails.card_number ||
        !cardDetails.card_expiry ||
        !cardDetails.card_cvv ||
        !cardDetails.card_name
      ) {
        setError("Please fill in all card details");
        return;
      }

      const data = new FormData();
      data.append("restaurant_id", restaurant.id || 1);
      data.append("user_name", userDetails.name);
      data.append("user_email", userDetails.email);
      data.append("user_address", userDetails.address);
      data.append("total_amount", totalAmount);
      data.append("user_token", user.session);
      data.append(
        "items",
        JSON.stringify(
          cart.map((item) => ({
            menu_item_id: item.id,
            quantity: item.quantity,
            price: item.price,
          }))
        )
      );
      data.append("card_number", cardDetails.card_number);
      data.append("card_expiry", cardDetails.card_expiry);
      data.append("card_cvv", cardDetails.card_cvv);
      data.append("card_name", cardDetails.card_name);
      data.append("method", "card");

      const res = await axios.post(
        ENDPOINT + "order.php",
        data,
        SecurityHeaders
      );
      if (res.data.status === "success") {
        const clearData = new FormData();
        clearData.append("user_token", user.session);
        await axios.post(
          ENDPOINT + "clear-cart.php",
          clearData,
          SecurityHeaders
        );
        navigate("/success", { state: { orderId: res.data.order_id } });
      } else {
        setError("Failed to place order: " + res.data.message);
      }
    } catch (err) {
      console.log("Place Order Error: " + err);
      setError("An error occurred while placing the order");
    }
  };

  const handleAddressChange = (event) => {
    const addressId = parseInt(event.target.value);
    setSelectedAddressId(addressId);
    const selected = addresses.find((addr) => addr.id === addressId);
    if (selected) {
      setUserDetails({
        ...userDetails,
        address: `${selected.address_line1}, ${selected.city}, ${selected.state} ${selected.postal_code}, ${selected.country}`,
      });
    }
  };

  useEffect(() => {
    getCart();
    getAddresses();
  }, []);

  return (
    <div className="osahan-checkout">
      <div className="container position-relative">
        <div className="py-5 row g-4">
          <div className="col-md-8">
            <div>
              <div className="osahan-cart-item mb-3 rounded shadow-sm bg-white overflow-hidden">
                <div className="osahan-cart-item-profile bg-white p-3">
                  <div className="d-flex flex-column">
                    <Typography variant="h6" fontWeight="bold" mb={3}>
                      Delivery Address
                    </Typography>
                    <FormControl component="fieldset">
                      <RadioGroup
                        name="addressRadio"
                        value={selectedAddressId || ""}
                        onChange={handleAddressChange}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                          gap: 4,
                        }}
                      >
                        {addresses.map((addr) => (
                          <Box
                            key={addr.id}
                            sx={{
                              width: { xs: "100%", lg: "45%" },
                              border: "1px solid #e0e0e0",
                              borderRadius: 1,
                              p: 2,
                              bgcolor: "white",
                              boxShadow: 1,
                            }}
                          >
                            <FormControlLabel
                              value={addr.id}
                              control={<Radio />}
                              label=""
                              sx={{ m: 0, width: "100%" }}
                            />
                            <Box sx={{ mt: -4, ml: 5 }}>
                              <Box display="flex" alignItems="center" mb={1}>
                                <Typography variant="subtitle1">
                                  {addr.address_type}
                                </Typography>
                                <Box
                                  ml="auto"
                                  display="flex"
                                  alignItems="center"
                                >
                                  {addr.is_default ? (
                                    <Typography
                                      variant="caption"
                                      color="success.main"
                                    >
                                      <i className="icofont-check-circled" />{" "}
                                      Default
                                    </Typography>
                                  ) : (
                                    <Typography
                                      variant="caption"
                                      color="text.secondary"
                                    >
                                      <i className="icofont-check-circled" />{" "}
                                      Select
                                    </Typography>
                                  )}
                                  <IconButton
                                    size="small"
                                    onClick={() => deleteAddress(addr.id)}
                                    sx={{ ml: 1 }}
                                  >
                                    <DeleteIcon color="error" />
                                  </IconButton>
                                </Box>
                              </Box>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {addr.address_line1}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {addr.city}, {addr.state} {addr.postal_code},{" "}
                                {addr.country}
                              </Typography>
                            </Box>
                            <Button
                              variant="outlined"
                              size="small"
                              fullWidth
                              onClick={() => handleEditAddress(addr)}
                              sx={{ mt: 2 }}
                            >
                              Edit
                            </Button>
                          </Box>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        setIsEditing(false);
                        setEditAddressId(null);
                        resetModal();
                        setOpen(true);
                      }}
                      sx={{ mt: 2 }}
                    >
                      ADD NEW ADDRESS
                    </Button>
                  </div>
                </div>
              </div>
              <TextField
                label="Name"
                fullWidth
                margin="normal"
                value={userDetails.name}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, name: e.target.value })
                }
                required
              />
              <TextField
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
                required
              />
              <Accordion sx={{ mb: 3, boxShadow: 1 }} defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="headingOne"
                >
                  <CreditCardIcon sx={{ mr: 1 }} />
                  <Typography>Credit/Debit Card</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="h6" mb={1}>
                    Add new card
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={2}>
                    WE ACCEPT (Master Card / Visa Card / Rupay)
                  </Typography>
                  <Box component="form">
                    <TextField
                      label="Card number"
                      type="text"
                      fullWidth
                      margin="normal"
                      value={cardDetails.card_number}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          card_number: e.target.value,
                        })
                      }
                      required
                    />
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <TextField
                        label="Valid through (MM/YY)"
                        type="text"
                        fullWidth
                        margin="normal"
                        sx={{ flex: 2 }}
                        value={cardDetails.card_expiry}
                        onChange={(e) =>
                          setCardDetails({
                            ...cardDetails,
                            card_expiry: e.target.value,
                          })
                        }
                        required
                      />
                      <TextField
                        label="CVV"
                        type="text"
                        fullWidth
                        margin="normal"
                        sx={{ flex: 1 }}
                        value={cardDetails.card_cvv}
                        onChange={(e) =>
                          setCardDetails({
                            ...cardDetails,
                            card_cvv: e.target.value,
                          })
                        }
                        required
                      />
                    </Box>
                    <TextField
                      label="Name on card"
                      fullWidth
                      margin="normal"
                      value={cardDetails.card_name}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          card_name: e.target.value,
                        })
                      }
                      required
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Securely save this card for a faster checkout next time."
                      sx={{ mt: 1 }}
                    />
                  </Box>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className="col-md-4">
            <div className="osahan-cart-item rounded shadow-sm overflow-hidden bg-white sticky_sidebar">
              <Box
                display="flex"
                alignItems="center"
                p={3}
                borderBottom="1px solid #e0e0e0"
                bgcolor="white"
              >
                <img
                  alt="osahan"
                  src="img/starter1.jpg"
                  className="me-3 rounded-circle img-fluid"
                  style={{ width: 50 }}
                />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {restaurant.name || "Spice Hut Indian Restaurant"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <i className="feather-map-pin" />{" "}
                    {restaurant.location || "2036 2ND AVE, NEW YORK, NY 10029"}
                  </Typography>
                </Box>
              </Box>
              <Box bgcolor="white" borderBottom="1px solid #e0e0e0" py={2}>
                {cart.map((item) => (
                  <Box
                    key={item.id}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    px={3}
                    py={2}
                    borderBottom="1px solid #e0e0e0"
                  >
                    <Box display="flex" alignItems="center">
                      <Typography
                        sx={{
                          mr: 1,
                          color:
                            item.type === "non-veg"
                              ? "error.main"
                              : "success.main",
                        }}
                      >
                        ·
                      </Typography>
                      <Typography>{item.name}</Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <Box display="flex" alignItems="center" mr={2}>
                        <IconButton
                          size="small"
                          onClick={() => updateCartQuantity(item.id, -1)}
                        >
                          <i className="feather-minus" />
                        </IconButton>
                        <TextField
                          value={item.quantity}
                          inputProps={{
                            readOnly: true,
                            style: { textAlign: "center", width: 40 },
                          }}
                          size="small"
                        />
                        <IconButton
                          size="small"
                          onClick={() => updateCartQuantity(item.id, 1)}
                        >
                          <i className="feather-plus" />
                        </IconButton>
                      </Box>
                      <Typography color="text.secondary">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box p={3} bgcolor="white" borderBottom="1px solid #e0e0e0">
                <Box display="flex" gap={1} mb={2}>
                  <TextField
                    placeholder="Enter promo code"
                    fullWidth
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={applyPromoCode}
                  >
                    APPLY
                  </Button>
                </Box>
                {error && (
                  <Typography color="error" variant="body2">
                    {error}
                  </Typography>
                )}
                <Box display="flex" alignItems="center" gap={1}>
                  <TextareaAutosize
                    minRows={3}
                    placeholder="Any suggestions? We will pass it on..."
                    style={{
                      width: "100%",
                      padding: 8,
                      borderRadius: 4,
                      border: "1px solid #e0e0e0",
                    }}
                  />
                </Box>
              </Box>
              <Box p={3} bgcolor="white" borderBottom="1px solid #e0e0e0">
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography>Item Total</Typography>
                  <Typography>${itemTotal.toFixed(2)}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography>Restaurant Charges</Typography>
                  <Typography>${restaurantCharges.toFixed(1)}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography>Delivery Fee</Typography>
                  <Typography>${deliveryFee.toFixed(2)}</Typography>
                </Box>
                {discount > 0 && (
                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography color="success.main">Total Discount</Typography>
                    <Typography color="success.main">
                      ${discount.toFixed(2)}
                    </Typography>
                  </Box>
                )}
                <hr />
                <Box display="flex" justifyContent="space-between">
                  <Typography fontWeight="bold">TO PAY</Typography>
                  <Typography fontWeight="bold">${totalAmount}</Typography>
                </Box>
              </Box>
              <Box p={3}>
                <Button
                  variant="contained"
                  color="success"
                  fullWidth
                  size="large"
                  onClick={placeOrder}
                  disabled={
                    !userDetails.name ||
                    !userDetails.email ||
                    !userDetails.address ||
                    !cardDetails.card_number ||
                    !cardDetails.card_expiry ||
                    !cardDetails.card_cvv ||
                    !cardDetails.card_name ||
                    cart.length === 0
                  }
                >
                  PAY ${totalAmount}
                  <i
                    className="feather-arrow-right"
                    style={{ marginLeft: 8 }}
                  />
                </Button>
              </Box>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={open} onClose={resetModal} maxWidth="sm" fullWidth>
        <DialogTitle>
          {isEditing ? "Edit Address" : "Add New Address"}
        </DialogTitle>
        <DialogContent>
          <Box
            component="form"
            id="address-form"
            onSubmit={isEditing ? updateAddress : addAddress}
            sx={{ mt: 2 }}
          >
            <TextField
              label="Address Type (e.g., Home, Work)"
              fullWidth
              margin="normal"
              value={newAddress.address_type}
              onChange={(e) =>
                setNewAddress({ ...newAddress, address_type: e.target.value })
              }
              required
            />
            <TextField
              label="Address Line 1"
              fullWidth
              margin="normal"
              value={newAddress.address_line1}
              onChange={(e) =>
                setNewAddress({ ...newAddress, address_line1: e.target.value })
              }
              required
            />
            <TextField
              label="Address Line 2 (Optional)"
              fullWidth
              margin="normal"
              value={newAddress.address_line2}
              onChange={(e) =>
                setNewAddress({ ...newAddress, address_line2: e.target.value })
              }
            />
            <TextField
              label="City"
              fullWidth
              margin="normal"
              value={newAddress.city}
              onChange={(e) =>
                setNewAddress({ ...newAddress, city: e.target.value })
              }
              required
            />
            <TextField
              label="State"
              fullWidth
              margin="normal"
              value={newAddress.state}
              onChange={(e) =>
                setNewAddress({ ...newAddress, state: e.target.value })
              }
              required
            />
            <TextField
              label="Postal Code"
              fullWidth
              margin="normal"
              value={newAddress.postal_code}
              onChange={(e) =>
                setNewAddress({ ...newAddress, postal_code: e.target.value })
              }
              required
            />
            <TextField
              label="Country"
              fullWidth
              margin="normal"
              value={newAddress.country}
              onChange={(e) =>
                setNewAddress({ ...newAddress, country: e.target.value })
              }
              required
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={newAddress.is_default}
                  onChange={(e) =>
                    setNewAddress({
                      ...newAddress,
                      is_default: e.target.checked,
                    })
                  }
                />
              }
              label="Set as default"
              sx={{ mt: 1 }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={resetModal} color="secondary">
            Cancel
          </Button>
          <Button
            type="submit"
            form="address-form"
            variant="contained"
            color="primary"
          >
            {isEditing ? "Update Address" : "Save Address"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Checkout;
