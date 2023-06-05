import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneDoctor } from "../../actions/Doctorsaction";

const DoctorDetailsHook = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneDoctor(id));
  }, []);

  const loading = useSelector((state) => state.DoctorsReducer.loading);
  const doctor = useSelector((state) => state.DoctorsReducer.oneDoctor);

  return [doctor, loading];
};

export default DoctorDetailsHook;
