import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutHook = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    await navigate("/");
  };

  return [handleLogout];
};

export default LogoutHook;
