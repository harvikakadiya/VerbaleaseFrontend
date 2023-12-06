import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("login");
    navigate("/auth/login");
  }, [navigate]);

  return <></>;
};

export default Logout;
