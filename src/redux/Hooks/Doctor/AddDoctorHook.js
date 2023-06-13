import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDoctor, getAllDoctors } from "./../../actions/Doctorsaction";
import avi from "../../../images/messi.jpg";
import notify from "./../../../Hook/useNotifaction";

const AddDoctorHook = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [spec, setSpec] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [info, setInfo] = useState("");
  const [image, setImage] = useState(avi);
  const [selectedFile, setSelectedFile] = useState(null);

  const res = useSelector((state) => state.DoctorsReducer.created);

  const onChangeName = (e) => {
    e.persist();
    setName(e.target.value);
  };

  const onChangeSpec = (e) => {
    e.persist();
    setSpec(e.target.value);
  };

  const onChangeAddress = (e) => {
    e.persist();
    setAddress(e.target.value);
  };

  const onChangePhone = (e) => {
    e.persist();
    setPhone(e.target.value);
  };

  const onChangeInfo = (e) => {
    e.persist();
    setInfo(e.target.value);
  };

  const onChangeImage = async (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      name === "" ||
      spec == "" ||
      name === "" ||
      phone == "" ||
      info == "" ||
      selectedFile === null
    )
      return notify("Please enter required fields!", "warn");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("address", address);
    formData.append("info", info);
    formData.append("PhoneNumber", phone);
    formData.append("Specialization", spec);
    formData.append("image", selectedFile);

    setLoading(true);
    await dispatch(createDoctor(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      handleClose();

      setName("");
      setSpec("");
      setAddress("");
      setPhone("");
      setInfo("");
      setImage(avi);
      setSelectedFile(null);

      if (res) {
        dispatch(getAllDoctors());
        if (res?.status == 200)
          return notify("Doctor added successfully", "success");
        else return notify("Something went wrong!", "error");
      }
    }
  }, [loading]);

  return [
    show,
    handleShow,
    handleClose,
    name,
    onChangeName,
    spec,
    onChangeSpec,
    address,
    onChangeAddress,
    phone,
    onChangePhone,
    info,
    onChangeInfo,
    image,
    onChangeImage,
    handleSubmit,
  ];
};

export default AddDoctorHook;
