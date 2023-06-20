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
  const [address, setAddress] = useState("");
  const [info, setInfo] = useState("");
  const [pass, setPass] = useState("");
  const [passConf, setPassConf] = useState("");
  const [image, setImage] = useState(avi);
  const [selectedFile, setSelectedFile] = useState(null);

  const res = useSelector((state) => state.authReducer.registeredDoc);

  const onChangeFName = (e) => setFName(e.target.value);
  const onChangeLName = (e) => setLName(e.target.value);
  const onChangeUser = (e) => setUser(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangeSpec = (e) => setSpec(e.target.value);
  const onChangePhone = (e) => setPhone(e.target.value);
  const onChangeAddress = (e) => setAddress(e.target.value);
  const onChangeInfo = (e) => setInfo(e.target.value);
  const onChangePass = (e) => setPass(e.target.value);
  const onChangePassConf = (e) => setPassConf(e.target.value);

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
      address == "" ||
      info == "" ||
      pass == "" ||
      passConf == "" ||
      selectedFile === null
    )
      return notify("Please enter required fields!", "warn");

    if (pass !== passConf) return notify("Please confirm password", "warn");

    const formData = new FormData();
    formData.append("first_name", fname);
    formData.append("last_name", lname);
    formData.append("username", user);
    formData.append("email", email);
    formData.append("phone_number", phone);
    formData.append("address", address);
    formData.append("info", info);
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
      setAddress("");
      setInfo("");
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
    address,
    onChangeAddress,
    info,
    onChangeInfo,
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
