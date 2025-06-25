import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SecurityHeaders from "../components/utilities/SecurityHeaders";
import ENDPOINT from "../components/utilities/ENDPOINT";
import axios from "axios";
import { ArrowRight } from "react-feather";
import toast from "react-hot-toast"; // For user feedback
import { UserContext } from "../components/utilities/UserContext";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
} from "@mui/material";

const Profile = () => {
  // const { User2 } = useContext(UserContext);
  const [user, setUser] = useState(null);
  const [csrfToken, setCsrfToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [User2, setUser2] = useState("");

  const getUserFromLocalStorage = () => {
    try {
      const value = localStorage.getItem("client1");
      return value ? JSON.parse(value) : {};
    } catch (error) {
      console.error("Error parsing user data:", error);
      return {};
    }
  };

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
  });

  const getUser = async () => {
    if (!User2?.session) return;
    setIsLoading(true);
    const data = new FormData();
    data.append("user_token", User2.session);
    try {
      const res = await axios.post(
        ENDPOINT + "get-account.php",
        data,
        SecurityHeaders
      );
      // console.log(res.data.status);
      if (res.data.status === "success") {
        setUser(res.data.data);
        localStorage.setItem(
          "name",
          JSON.stringify(
            res.data.data.first_name + " " + res.data.data.last_name
          )
        );
      } else {
        setError(res.data.message || "Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Failed to fetch user data");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = [];
    if (!formData.first_name.trim()) errors.push("First name is required");
    if (!formData.last_name.trim()) errors.push("Last name is required");
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push("Valid email is required");
    }
    if (
      !formData.phone_number ||
      !/^[0-9+\-\(\) ]{7,20}$/.test(formData.phone_number)
    ) {
      errors.push("Valid phone number is required");
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setError(validationErrors.join(", "));
      setIsLoading(false);
      return;
    }

    const data = new FormData();
    data.append("first_name", formData.first_name);
    data.append("last_name", formData.last_name);
    data.append("phone_number", formData.phone_number);
    data.append("email", formData.email);
    data.append("user_id", User2?.user_id);
    data.append("user_token", User2?.session);

    try {
      const res = await axios.post(
        ENDPOINT + "edit-user.php",
        data,
        SecurityHeaders
      );
      if (res && res.data.status === "success") {
        toast.success("Profile updated successfully");
        await getUser();
      } else {
        setError(res.data.message || "Failed to update profile");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
      setError("Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    setUser2(getUserFromLocalStorage());
  }, []);

  useEffect(() => {
    if (User2?.session) {
      getUser();
    }
  }, [User2?.session]);

  useEffect(() => {
 

    if (user) {
      setFormData({
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        email: user.email || "",
        phone_number: user.phone_number || "",
      });
    } else {
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
      });
    }
  }, [user]);

  return (
    <>
      <div className="rounded shadow-sm p-4 bg-white">
        <h5 className="mb-4">My account</h5>
        {error && <div className="alert alert-danger">{error}</div>}
        <div id="edit_profile">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label className="pb-1">First Name</label>
              <input
                type="text"
                className="form-control"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            <div className="form-group mb-3">
              <label className="pb-1">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            <div className="form-group mb-3">
              <label className="pb-1">Mobile Number</label>
              <input
                type="text"
                className="form-control"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            <div className="form-group mb-3">
              <label className="pb-1">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={isLoading}
              >
                {isLoading ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
          <div className="additional">
            <div className="change_password my-3">
              <Link
                to="/change-password"
                className="p-3 border rounded bg-white btn d-flex align-items-center"
              >
                Change Password
                <ArrowRight className="ms-auto" />
              </Link>
            </div>
            <div className="deactivate_account">
              <Link
                to="/deactivate-account"
                className="p-3 border rounded bg-white btn d-flex align-items-center"
              >
                Deactivate Account
                <ArrowRight className="ms-auto" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
