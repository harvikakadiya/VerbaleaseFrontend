// Dashboard.js

import React from "react";
import "../styles/demo_style.css";
import "../styles/dashboard.css";
import Sidebar from "./Sidebar";
import Header from "./Header";


const Dashboard = () => {
  return (
    <div className="dashboard-container">
     <Header/>
      <div
        className="container"
        style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/bubble.jpg)`,
          backgroundColor: 'auto',
        }}
      >
  <Sidebar/>
        <div className="container">
          <div className="dashboard-content">
            <h2 style={{ margin: "10%" }}>
              Your All-in-One<span> Writing Essentials</span>
            </h2>
            <div>
              <img src="/images/image.jpeg" alt="Dashboard" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
