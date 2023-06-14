import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "./../../../Hook/useNotifaction";
import avi from "../../../images/messi.jpg";
import {
  createCondition,
  getAllConditions,
} from "../../actions/ConditionsAction";

const AddConditionHook = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(avi);
  const [selectedFile, setSelectedFile] = useState(null);

  const res = useSelector((state) => state.ConditionsReducer.created);

  const onChangeTitle = (e) => {
    e.persist();
    setTitle(e.target.value);
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
    if (title === "" || desc == "" || selectedFile === null)
      return notify("Please enter required fields!", "warn");

    const formData = new FormData();
    formData.append("name", title);
    formData.append("description", desc);
    formData.append("image", selectedFile);

    setLoading(true);
    await dispatch(createCondition(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      setTitle("");
      setDesc("");
      setImage(avi);
      setSelectedFile(null);

      if (res) {
        dispatch(getAllConditions());
        console.log(res);
        if (res?.status == 200)
          return notify("Condition added successfully", "success");
        else return notify("Something went wrong!", "error");
      }
    }
  }, [loading]);

  return [
    title,
    onChangeTitle,
    desc,
    onChangeDesc,
    image,
    onChangeImage,
    handleSubmit,
  ];
};

export default AddConditionHook;
