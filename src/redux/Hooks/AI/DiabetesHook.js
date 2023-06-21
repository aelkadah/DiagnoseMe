import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkDiabetes } from "../../actions/AiAction";
import notify from "../../../Hook/useNotifaction";

const DiabetesHook = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    if (!loading) if (res?.data) console.log(res.data);
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
