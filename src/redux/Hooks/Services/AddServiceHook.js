import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createService, getAllServices } from "../../actions/ServicesAction";
import notify from "../../../Hook/useNotifaction";
import avi from "../../../images/messi.jpg";

const AddServiceHook = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(avi);
  const [selectedFile, setSelectedFile] = useState(null);

  const res = useSelector((state) => state.ServicesReducer.created);

  const onChangeName = (e) => {
    e.persist();
    setName(e.target.value);
  };

  const onChangeDesc = (e) => {
    e.persist();
    setDesc(e.target.value);
  };

  const onChangeImage = async (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || desc == "" || selectedFile === null)
      return notify("Please enter required fields!", "warn");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", desc);
    formData.append("image", selectedFile);

    setLoading(true);
    await dispatch(createService(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      handleClose();

      setName("");
      setDesc("");
      setImage(avi);
      setSelectedFile(null);

      if (res) {
        if (res?.status == 200) {
          dispatch(getAllServices());
          return notify("Service added successfully", "success");
        } else return notify("Something went wrong!", "error");
      }
    }
  }, [loading]);

  return [
    show,
    handleShow,
    handleClose,
    name,
    onChangeName,
    desc,
    onChangeDesc,
    image,
    onChangeImage,
    handleSubmit,
  ];
};

export default AddServiceHook;
