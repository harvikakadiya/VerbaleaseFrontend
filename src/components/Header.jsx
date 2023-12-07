import React, { useEffect, useState } from "react";

const Header = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    try {
      const isLogin = localStorage.getItem("login");
      let currentUser = localStorage.getItem("my-app");
      console.log({ isLogin });
      if (currentUser && isLogin) {
        currentUser = JSON.parse(currentUser);
        console.log({ currentUser });
        currentUser = currentUser.find((obj) => obj.email === isLogin);
        console.log({ currentUser });
        setUserName(currentUser?.fname);
      }
    } catch (error) {
      //
    }
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <img
          src={'/dm.png'}
          alt="Logo"
        />
        <h2>VerbalEase-AI</h2>
      </div>
      <a href="#" className="login-btn">
        <span className="styles_rippleSpan__M7thf">
          <h3>{userName}</h3>
        </span>
      </a>
    </header>
  );
};

export default Header;
