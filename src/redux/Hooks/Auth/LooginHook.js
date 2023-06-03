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
    if (loading === false) {
      if (res) {
        if (res.status === 200) {
          setEmail("");
          setPassword("");
        }
        if (res.status != 200) {
          notify("راجع معلوماتك", "warn");
        }
        if (res.data.data.token) {
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.data.token));
          notify("تم تسجيل الدخول بنجاح", "success");
          setTimeout(() => navigate("/"), 2000);
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }

        setLoading(true);
      }
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
