import React, { useState } from "react";
import "../styles/style.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let userData = localStorage.getItem("my-app");
    if (userData) {
      try {
        userData = JSON.parse(userData);
        const matchUser = userData.find(
          (obj) => obj.email === formData?.username
        );
        if (matchUser && matchUser.password === formData.password) {
          localStorage.setItem("login", formData?.username);
          navigate("/");
        }
      } catch (error) {
        //
      }
    }
  };

  return (
    <div className="login-container">
      <div className="form-wrapper">
        <h1>Login Page!</h1>
        <div>
          <form method="POST" onSubmit={handleSubmit}>
            <div className="input-field">
              <input
                type="email"
                name="username"
                required
                value={formData.username}
                onChange={handleInputChange}
              />
              <label>Your Username</label>
            </div>
            <div className="input-field">
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleInputChange}
              />
              <label>Your Password</label>
            </div>
            {/* <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div> */}
            <button type="submit">Login</button>
            <div className="signup-link">
              Want to create an account? <Link to="/auth/sign-up">Sign up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
