import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllSymptoms } from "./../../actions/CheckupAction";

const AllSymptomsHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSymptoms());
  }, []);

  const symptoms = useSelector((state) => state.CheckupReducer.symptoms);
  const loading = useSelector((state) => state.CheckupReducer.loading);

  return [symptoms, loading];
};

export default AllSymptomsHook;
