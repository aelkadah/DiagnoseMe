import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkDiabetes } from "../../actions/AiAction";
import notify from "../../../Hook/useNotifaction";

const DiabetesHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState("");

  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [hypertension, setHypertension] = useState(0);
  const [heartdiseases, setHeartdiseases] = useState(0);
  const [bmi, setBmi] = useState("");
  const [hba1c, setHbA1clevel] = useState("");
  const [glucose, setGlucose] = useState("");

  const res = useSelector((state) => state.AiReducer.diabetes);

  const onChangeAge = (e) => setAge(e.target.value);
  const onChangeGender = (e) => setGender(e.target.value);
  const onChangeHypertension = (e) => setHypertension(e.target.value);
  const onChangeHeartdiseases = (e) => setHeartdiseases(e.target.value);
  const onChangeBmi = (e) => setBmi(e.target.value);
  const onChangeHba1c = (e) => setHbA1clevel(e.target.value);
  const onChangeGlucose = (e) => setGlucose(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (gender == "" || age == "" || bmi == "" || hba1c == "" || glucose == "")
      return notify("Please fill required fields!", "warn");

    setLoading(true);

    await dispatch(
      checkDiabetes({
        gender,
        age,
        hypertension,
        heart_disease: heartdiseases,
        bmi,
        HbA1c_level: hba1c,
        blood_glucose_level: glucose,
      })
    );

    setLoading(false);
  };

  const handleDone = async (e) => {
    await handleClose();
    setTimeout(() => navigate("/"), 1000);
  };

  const handleFindDoctor = async (e) => {
    await handleClose();
    setTimeout(() => navigate("/doctors"), 1000);
  };

  useEffect(() => {
    if (!loading)
      if (res?.status == 200 && res?.data?.response == 200) {
        handleShow();
        setAge("");
        setGender("");
        setHypertension(0);
        setHeartdiseases(0);
        setBmi("");
        setHbA1clevel("");
        setGlucose("");
        if (res.data.result == false) setResult("congratz");
        else if (res.data.result == true) setResult("sorry");
      } else return notify("Something went wrong!", "error");
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
    result,
    handleDone,
    handleFindDoctor,
  ];
};

export default DiabetesHook;
