import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/utilities/UserContext";
import ENDPOINT from "../components/utilities/ENDPOINT";
import SecurityHeaders from "../components/utilities/SecurityHeaders";
import axios from "axios";

const Signup = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [credential, setCredential] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone: "",
  });

  const [checkPassword, setCheckPassword] = useState({
    color: "#000",
    message: "",
    strength: 0,
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [validationMessages, setValidationMessages] = useState({
    email: "",
    phone: "",
    password: "",
  });

  const handleForm = (e) => {
    const { name, value } = e.target;

    setCredential({
      ...credential,
      [name]: value,
    });

    if (name === "password") {
      const strength = checkStrength(value);
      updateStrengthIndicator(strength);
      updateStrengthText(strength);
    }

    validateForm();
  };

  const checkStrength = (password) => {
    let strength = 0;
    if (password.length > 7) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[\W]/.test(password)) strength += 1; // Checks for special characters
    return strength;
  };

  const updateStrengthIndicator = (strength) => {
    const colors = ["#ccc", "red", "orange", "#130dff", "green"];

    setCheckPassword((prevState) => ({
      ...prevState,
      color: colors[strength],
      strength: strength * 25, // for progress bar (max is 100)
    }));
  };

  const updateStrengthText = (strength) => {
    const strengthMessages = [
      "Too Short",
      "Weak",
      "Medium",
      "Strong",
      "Very Strong",
    ];

    setCheckPassword((prevState) => ({
      ...prevState,
      message: strengthMessages[strength],
    }));
  };

  const validateForm = () => {
    const emailPattern = /\S+@\S+\.\S+/;
    const phonePattern = /^[0-9]{10}$/;

    const isEmailValid = emailPattern.test(credential.email);
    const isPhoneValid = phonePattern.test(credential.phone);
    const isPasswordValid = credential.password.length > 7;

    // Set validation messages
    setValidationMessages({
      email: isEmailValid ? "" : "Invalid email format",
      phone: isPhoneValid ? "" : "Phone number must be 10 digits",
      password: isPasswordValid ? "" : "Password must be at least 8 characters",
    });

    setIsFormValid(isEmailValid && isPhoneValid && isPasswordValid);
  };

  const signUp = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("email", credential.email);
      data.append("password", credential.password);
      data.append("phone_number", credential.phone);
      data.append("first_name", credential.first_name);
      data.append("last_name", credential.last_name);

      const res = await axios.post(
        ENDPOINT + "signup.php",
        data,
        SecurityHeaders
      );
      if (res?.data?.status === "success") {
        const userData = res.data.data;
        localStorage.setItem("client1", JSON.stringify(userData));
        setUser(userData);

        navigate("/");
        window.location.reload();
      }
    } catch (err) {
      console.log("User Signup Error: " + err);
    }
  };

  return (
    <div className="osahan-signup login-page">
      <video loop autoPlay muted id="vid">
        <source src="img/bg.mp4" type="video/mp4" />
        <source src="img/bg.mp4" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
      <div className="d-flex align-items-center justify-content-center flex-column vh-100">
        <div className="px-5 col-md-6 ms-auto">
          <div className="px-5 col-10 mx-auto">
            <h2 className="text-dark my-0">Hello There.</h2>
            <p className="text-50">Sign up to continue</p>
            <form className="mt-5 mb-4" onSubmit={signUp}>
              <div className="form-group">
                <label className="text-dark pb-1">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  placeholder="Enter First Name"
                  className="form-control py-1"
                  value={credential.first_name}
                  onChange={handleForm}
                />
              </div>
              <div className="form-group">
                <label className="text-dark pb-1">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Enter Last Name"
                  className="form-control py-1"
                  value={credential.last_name}
                  onChange={handleForm}
                />
              </div>
              <div className="form-group">
                <label className="text-dark pb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="form-control py-1"
                  value={credential.email}
                  onChange={handleForm}
                />
                <small className="text-danger">
                  {validationMessages.email}
                </small>
              </div>
              <div className="form-group">
                <label className="text-dark pb-1">Mobile Number</label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter Mobile"
                  className="form-control py-1"
                  value={credential.phone}
                  onChange={handleForm}
                />
                <small className="text-danger">
                  {validationMessages.phone}
                </small>
              </div>
              <div className="form-group">
                <label className="text-dark pb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="form-control py-1"
                  value={credential.password}
                  onChange={handleForm}
                />
                <small className="text-danger">
                  {validationMessages.password}
                </small>
                <div
                  className="progress mt-2"
                  style={{ height: "5px", backgroundColor: "#e0e0e0" }}
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${checkPassword.strength}%`,
                      backgroundColor: checkPassword.color,
                    }}
                  />
                </div>
                <small className="text-muted">{checkPassword.message}</small>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg w-100"
                // disabled={!isFormValid}
              >
                SIGN UP
              </button>
              <div className="py-2">
                <button className="btn btn-facebook btn-lg w-100">
                  <i className="feather-facebook" /> Connect with Facebook
                </button>
              </div>
            </form>
          </div>
          <div className="new-acc d-flex align-items-center justify-content-center">
            <a href="/login">
              <p className="text-center m-0">
                Already have an account? Sign in
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
