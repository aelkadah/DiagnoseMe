import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import avi from "../../../images/messi.jpg";
import { doctorRegister } from "./../../actions/Authaction";
import notify from "./../../../Hook/useNotifaction";

const DoctorRegisterHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [spec, setSpec] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [passConf, setPassConf] = useState("");
  const [image, setImage] = useState(avi);
  const [selectedFile, setSelectedFile] = useState(null);

  const res = useSelector((state) => state.authReducer.registeredDoc);

  const onChangeFName = (e) => {
    e.persist();
    setFName(e.target.value);
  };

  const onChangeLName = (e) => {
    e.persist();
    setLName(e.target.value);
  };

  const onChangeUser = (e) => {
    e.persist();
    setUser(e.target.value);
  };

  const onChangeEmail = (e) => {
    e.persist();
    setEmail(e.target.value);
  };

  const onChangeSpec = (e) => {
    e.persist();
    setSpec(e.target.value);
  };

  const onChangePhone = (e) => {
    e.persist();
    setPhone(e.target.value);
  };

  const onChangePass = (e) => {
    e.persist();
    setPass(e.target.value);
  };

  const onChangePassConf = (e) => {
    e.persist();
    setPassConf(e.target.value);
  };

  const onChangeImage = async (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (
      fname === "" ||
      lname === "" ||
      user == "" ||
      email === "" ||
      phone == "" ||
      spec == "" ||
      pass == "" ||
      passConf == "" ||
      selectedFile === null
    )
      return notify("Please enter required fields!", "warn");

    const formData = new FormData();
    formData.append("first_name", fname);
    formData.append("last_name", lname);
    formData.append("username", user);
    formData.append("email", email);
    formData.append("phone_number", phone);
    formData.append("password", pass);
    formData.append("password_confirmation", passConf);
    formData.append("specialization", spec);
    formData.append("image", selectedFile);
    formData.append("role", "2");

    setLoading(true);
    await dispatch(doctorRegister(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      setFName("");
      setLName("");
      setUser("");
      setEmail("");
      setPhone("");
      setPass("");
      setPassConf("");
      setSpec("");
      setImage(avi);
      setSelectedFile(null);

      if (res?.status == 200) {
        // console.log(res.data.data.token);
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("userInfo", JSON.stringify(res.data.data.user));
        notify("Account registered successfully", "success");
        setTimeout(() => navigate("/"), 2000);
      }
    }
  }, [loading]);

  return [
    fname,
    onChangeFName,
    lname,
    onChangeLName,
    user,
    onChangeUser,
    email,
    onChangeEmail,
    phone,
    onChangePhone,
    pass,
    onChangePass,
    passConf,
    onChangePassConf,
    spec,
    onChangeSpec,
    image,
    onChangeImage,
    handleRegister,
  ];
};

export default DoctorRegisterHook;
