import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "./../../../Hook/useNotifaction";
import {
  createCondition,
  getAllConditions,
} from "../../actions/ConditionsAction";

const AddConditionHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [overview, setOverview] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [risks, setRisks] = useState("");
  const [prognosis, setPrognosis] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [treatment, setTreatment] = useState("");

  const res = useSelector((state) => state.ConditionsReducer.created);

  const onChangeOverview = (e) => setOverview(e.target.value);
  const onChangeSymptoms = (e) => setSymptoms(e.target.value);
  const onChangeRisks = (e) => setRisks(e.target.value);
  const onChangePrognosis = (e) => setPrognosis(e.target.value);
  const onChangeDiagnosis = (e) => setDiagnosis(e.target.value);
  const onChangeTreatment = (e) => setTreatment(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      overview === "" ||
      symptoms == "" ||
      risks == "" ||
      prognosis === "" ||
      diagnosis == "" ||
      treatment == ""
    )
      return notify("Please enter required fields!", "warn");

    setLoading(true);
    await dispatch(
      createCondition({
        overview,
        risks,
        symptoms,
        diagnosis,
        prognosis,
        treatment,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      setOverview("");
      setSymptoms("");
      setRisks("");
      setPrognosis("");
      setDiagnosis("");
      setTreatment("");

      if (res) {
        dispatch(getAllConditions());
        // console.log(res);
        if (res?.status == 200) {
          notify("Condition added successfully", "success");
          return navigate("/dashboard/conditions");
        } else return notify("Something went wrong!", "error");
      }
    }
  }, [loading]);

  return [
    overview,
    onChangeOverview,
    symptoms,
    onChangeSymptoms,
    risks,
    onChangeRisks,
    prognosis,
    onChangePrognosis,
    diagnosis,
    onChangeDiagnosis,
    treatment,
    onChangeTreatment,
    handleSubmit,
  ];
};

export default AddConditionHook;
