import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNewUser } from "../../actions/Authaction";
import notify from "../../../Hook/useNotifaction";
import { useEffect } from "react";
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

  const res = useSelector((state) => state.authReducer.createUser);

  const OnSubmit = async () => {
    if (firstname === "") {
      return notify("من فضلك ادخل الاسم الاول", "error");
    } else if (lastname === "") {
      return notify("من فضلك ادخل الاسم الثاني", "error");
    } else if (userName === "") {
      return notify("من فضلك ادخل اسم المستخدم", "error");
    } else if (phone.length <= 10) {
      return notify("من فضلك ادخل رقم هاتف صحيح", "error");
    } else if (password == "") {
      return notify("من فضلك تاكيد من كلمه السر", "error");
    } else if (password < 10) {
      return notify(
        "     يجب ان لا تقل كلمه المرور عن 10 احرف وارقام",
        "error"
      );
    } else if (password != confirmPassword) {
      return notify("من فضلك تاكيد من كلمه السر", "error");
    }

    setLoading(true);
    await dispatch(
      createNewUser({
        first_name: firstname,
        last_name: lastname,
        username: userName,
        email: email,
        phone_number: phone,
        password: password,
        password_confirmation: confirmPassword,
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
          notify("تم تسجيل الحساب بنجاح", "success");
          setTimeout(() => navigate("/"), 2000);
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
