import React, { useEffect, useState } from "react";
import "./Login.scss";
import { FaAnglesRight, FaAddressCard, FaLock } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/,
        "Must Contain 4 Chars, 1 Uppercase, 1 Lowercase, 1 Number & 1 special Char"
      ),
  });

  const navigate = useNavigate();
  const [storedUsers, setStoredUsers] = useState([]);
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");

  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
    setStoredUsers(allUsers);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const loginUser = (data) => {
    const user = storedUsers.find(
      (storedUser) =>
        storedUser.email === data.email && storedUser.password === data.password
    );

    if (user) {
      console.log("User logged in:", user);

      localStorage.setItem("loggedInUser", JSON.stringify(user));

      setLoginError("");
      setLoginSuccess("Logged In successfully!");

      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    } else {
      setLoginSuccess("");
      setLoginError("Invalid email or password");
    }
  };

  return (
    <div class="container">
      <div class="login-container">
        <h1 class="form-head">Login</h1>
        <div class="login-form">
          <form class="login" onSubmit={handleSubmit(loginUser)}>
            {loginError && <p class="error-message">{loginError}</p>}
            {loginSuccess && <p class="success-message">{loginSuccess}</p>}
            <div class="login-field">
              <input
                type="email"
                {...register("email")}
                class="login-input"
                placeholder="Enter your Email"
              />
              <FaAddressCard class="login-icon fas fa-user" />
            </div>
            <div class="login-field">
              <input
                type="password"
                {...register("password")}
                class="login-input"
                placeholder="Password"
              />
              <FaLock class="login-icon fas fa-lock" />
            </div>
            <button type="submit" class="button login-submit">
              <span class="button-text">Log In Now</span>
              <FaAnglesRight class="button-icon fas fa-chevron-right" />
            </button>
          </form>
        </div>
        <div class="social-login">
          <h3>Don't Have an Account</h3>
          <a className="reg" onClick={() => navigate("/register")}>Register Here</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
