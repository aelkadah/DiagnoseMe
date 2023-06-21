import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAlzheimer } from "../../actions/AIAction";
import ai from "../../../images/ai.png";
import notify from "./../../../Hook/useNotifaction";

const AlzheimerHook = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(ai);
  const [selectedFile, setSelectedFile] = useState(null);

  const res = useSelector((state) => state.AiReducer.alzheimer);

  const handleChangeImage = async (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit clicked");

    if (!selectedFile || selectedFile == "")
      return notify("Please upload MRI file!", "warn");

    const formData = new FormData();
    formData.append("file", selectedFile);

    setLoading(true);
    await dispatch(checkAlzheimer(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) if (res) console.log(res);
  }, [loading]);

  return [show, handleClose, handleChangeImage, handleSubmit];
};

export default AlzheimerHook;