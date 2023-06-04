import React, { useState, useEffect } from "react";
import notify from "../../../Hook/useNotifaction";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions/Authaction";
import { useNavigate } from "react-router-dom";

const LoginHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async () => {
    if (email === "") return notify("Please enter your email!", "warn");
    else if (password === "") return notify("Please enter password!", "warn");

    setIsPress(true);
    setLoading(true);

    await dispatch(
      loginUser({
        email,
        password,
      })
    );

    setLoading(false);
    setIsPress(false);
  };
  const res = useSelector((state) => state.authReducer.loginUser);

  useEffect(() => {
    if (!loading) {
      if (res?.status == 200) {
        setEmail("");
        setPassword("");
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("userInfo", JSON.stringify(res.data.data.user));
        notify("Successfully Logged in", "success");
        setTimeout(() => navigate("/"), 2000);
      } else if (res?.status != 200)
        return notify("Email or Password is Incorrect!", "error");
    }
  }, [loading]);

  return [
    email,
    password,
    loading,
    onChangeEmail,
    onChangePassword,
    onSubmit,
    isPress,
  ];
};
export default LoginHook;
