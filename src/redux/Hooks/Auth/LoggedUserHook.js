import React from "react";
import { useEffect, useState } from "react";

const LoggedUserHook = () => {
  const [first, setfirst] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) console.log("yes");
  }, [token]);

  return [logged, loading];
};

export default LoggedUserHook;
