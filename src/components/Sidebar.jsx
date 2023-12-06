import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav>
      <div
        className="side_navbar"
        style={{ width: "110px", backgroundColor: "rgb(146, 181, 245)" }}
      >
        <Link to="/">
          <i className="fas fa-menorah"></i>
          <span className="nav-item">Dashboard</span>
        </Link>
        <Link to="/chat-box">
          <i className="fas fa-robot"></i>
          <span className="nav-item">AI-Chat</span>
        </Link>
        <Link to="/translator">
          <i className="fas fa-language"></i>
          <span className="nav-item">Translator</span>
        </Link>
        <Link to="/paraphraser">
          <i className="fas fa-paragraph"></i>
          <span className="nav-item">Paraphraser</span>
        </Link>
        <Link to="/summarizer">
          <i className="fas fa-file-alt"></i>
          <span className="nav-item">Summarizer</span>
        </Link>
        {/* <Link to="/">
              <i className="fas fa-cog"></i>
              <span className="nav-item">Setting</span>
            </Link> */}
        <Link to="/contact-us">
          <i className="fas fa-address-book"></i>
          <span className="nav-item">Contact Us</span>
        </Link>
        <Link to="/help">
          <i className="fas fa-hands-helping"></i>
          <span className="nav-item">Help</span>
        </Link>
        <Link to="/logout">
          <i className="fas fa-sign-out-alt"></i>
          <span className="nav-item">Log out</span>
        </Link>
      </div>
      <div style={{ width: "110px" }}></div>
    </nav>
  );
};

export default Sidebar;
