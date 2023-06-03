import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDoctors } from "../actions/Doctorsaction";

const DoctorsHook = () => {
  const dispatch = useDispatch();
  //when first load
  useEffect(() => {
    dispatch(getAllDoctors());
  }, []);

  //to get state from redux
  const doctors = useSelector((state) => state.DoctorsReducer.Doctors);
  const loading = useSelector((state) => state.DoctorsReducer.loading);

  return [doctors, loading];
};

export default DoctorsHook;
