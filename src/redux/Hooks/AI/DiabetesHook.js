import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkDiabetes } from "../../actions/AiAction";
import notify from "../../../Hook/useNotifaction";
import axios from "axios";

const DiabetesHook = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loading, setLoading] = useState(true);

  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [hypertension, setHypertension] = useState("");
  const [heartdiseases, setHeartdiseases] = useState("");
  const [bmi, setBmi] = useState("");
  const [hba1c, setHbA1clevel] = useState("");
  const [glucose, setGlucose] = useState("");

  const res = useSelector((state) => state.AiReducer.AiReducer);

  const onChangeAge = (e) => setAge(e.target.value);
  const onChangeGender = (e) => setGender(e.target.value);
  const onChangeHypertension = (e) => setHypertension(e.target.value);
  const onChangeHeartdiseases = (e) => setHeartdiseases(e.target.value);
  const onChangeBmi = (e) => setBmi(e.target.value);
  const onChangeHba1c = (e) => setHbA1clevel(e.target.value);
  const onChangeGlucose = (e) => setGlucose(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit clicked");

    // if (
    //   gender == "" ||
    //   age == "" ||
    //   hypertension == "" ||
    //   heartdiseases == "" ||
    //   bmi == "" ||
    //   hba1c == "" ||
    //   glucose == ""
    // )
    //   return notify("Please fill required fields!", "warn");

    // console.log({
    //   gender,
    //   age,
    //   hypertension,
    //   heart_disease: heartdiseases,
    //   bmi,
    //   HbA1c_level: hba1c,
    //   blood_glucose_level: glucose,
    // });

    setLoading(true);

    await dispatch(checkDiabetes());

    // await dispatch(
    //   checkDiabetes({
    //     gender: "Female",
    //     age: 80,
    //     hypertension: 0,
    //     heart_disease: 1,
    //     bmi: 25.19,
    //     HbA1c_level: 6.6,
    //     blood_glucose_level: 140,
    //   })
    // );

    setLoading(false);
  };

  useEffect(() => {
    if (!loading) if (res) console.log(res);
  }, [loading]);

  return [
    show,
    handleClose,
    handleShow,
    age,
    onChangeAge,
    gender,
    onChangeGender,
    hypertension,
    onChangeHypertension,
    heartdiseases,
    onChangeHeartdiseases,
    bmi,
    onChangeBmi,
    hba1c,
    onChangeHba1c,
    glucose,
    onChangeGlucose,
    handleSubmit,
  ];
};

export default DiabetesHook;

// http://147.182.201.161/?gender=Female&age=80.0&hypertension=0&heart_disease=1&bmi=25.19&HbA1c_level=6.6&blood_glucose_level=140
