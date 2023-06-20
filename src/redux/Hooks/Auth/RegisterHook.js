import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../../actions/Authaction";
import notify from "../../../Hook/useNotifaction";

const RegisterHook = () => {
  const [firstname, setfirstName] = useState("");
  const [lastname, setlasttName] = useState("");
  const [userName, SetUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangefirstName = (e) => {
    setfirstName(e.target.value);
  };

  const onChangelastName = (e) => {
    setlasttName(e.target.value);
  };

  const onChangeuserName = (e) => {
    SetUserName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const res = useSelector((state) => state.authReducer.registered);

  const OnSubmit = async () => {
    if (firstname === "") {
      return notify("Please enter your first name!", "warn");
    } else if (lastname === "") {
      return notify("Please enter your lasts name!", "warn");
    } else if (userName === "") {
      return notify("Please enter username!", "warn");
    } else if (phone.length <= 10) {
      return notify("Please enter phone number", "warn");
    } else if (password == "") {
      return notify("Please type a password", "warn");
    } else if (password < 10) {
      return notify("Phone number cannot be less than 10 numbers", "warn");
    } else if (password != confirmPassword) {
      return notify("Password confirmation is not correctly!", "warn");
    }

    setLoading(true);
    await dispatch(
      userRegister({
        first_name: firstname,
        last_name: lastname,
        username: userName,
        email: email,
        password: password,
        password_confirmation: confirmPassword,
        phone_number: phone,
        premium: "0",
        role: "0",
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res) {
        // console.log(res);
        if (res.status == 200) {
          // console.log(res.data.data.token);
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("userInfo", JSON.stringify(res.data.data.user));
          notify("Account registered successfully", "success");
          setTimeout(() => navigate("/"), 1000);
        }
      }
    }
  }, [loading]);

  return [
    firstname,
    lastname,
    userName,
    email,
    phone,
    password,
    confirmPassword,
    onChangefirstName,
    onChangelastName,
    onChangeuserName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    OnSubmit,
  ];
};

export default RegisterHook;
