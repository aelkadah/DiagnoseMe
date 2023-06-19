import React from "react";
import { useNavigate } from "react-router-dom";
import notify from "../../../Hook/useNotifaction";

const LogoutHook = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    notify("Logged-out successfully", "success");
    await navigate("/");
  };

  return [handleLogout];
};

export default LogoutHook;
