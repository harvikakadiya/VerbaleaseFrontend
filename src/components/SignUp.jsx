import React, { useState } from "react";
import "../styles/sign-up.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    birthday: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    console.log(formData);
    let previousUserData = localStorage.getItem("my-app");
    if (previousUserData) {
      try {
        previousUserData = JSON.parse(previousUserData);
      } catch (error) {
        //
      }
    } else {
      previousUserData = [];
    }
    localStorage.setItem(
      "my-app",
      JSON.stringify([...previousUserData, formData])
    );
    navigate("/auth/login");
    // Add logic for form submission, API calls, etc.
  };

  return (
    <div className="register-wrapper register-main">
      <div className="register">
        <h2>Register Here</h2>
        <div className="register-form-wrapper">
          <form id="register" onSubmit={handleSubmit}>
            <label>First name:</label>
            <br />
            <input
              type="text"
              name="fname"
              id="fname"
              required
              placeholder="Enter Your First Name"
              value={formData.fname}
              onChange={handleInputChange}
            />
            <br /> <br />
            <label>Last Name:</label>
            <br />
            <input
              type="text"
              name="lname"
              id="lname"
              placeholder="Enter Your Last Name"
              value={formData.lname}
              onChange={handleInputChange}
            />
            <br /> <br />
            <label>Birthday:</label>
            <br />
            <input
              type="date"
              name="birthday"
              id="birthday"
              value={formData.birthday}
              onChange={handleInputChange}
            />
            <br /> <br />
            <label>Email:</label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter Your valid email address"
              value={formData.email}
              onChange={handleInputChange}
            />
            <br /> <br />
            <label>Password:</label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Enter Your password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <br /> <br />
            <label>Confirm Password:</label>
            <br />
            <input
              type="password"
              required
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Enter Your password again"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <br /> <br />
            <input type="submit" name="submit" id="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
