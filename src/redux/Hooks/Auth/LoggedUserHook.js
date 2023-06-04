import React, { useState } from "react";
import { useEffect } from "react";

const LoggedUserHook = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("userInfo"))
      setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
  }, []);

  return [userInfo];
};

export default LoggedUserHook;
