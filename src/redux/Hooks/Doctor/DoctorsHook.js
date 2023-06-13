import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllDoctors } from "../../actions/Doctorsaction";

const DoctorsHook = () => {
  const dispatch = useDispatch();
  //when first load
  useEffect(() => {
    dispatch(getAllDoctors());
  }, []);

  let pageCount = 0;

  //to get state from redux
  const data = useSelector((state) => state.DoctorsReducer.Doctors);
  const doctors = useSelector((state) => state.DoctorsReducer.Doctors.data);
  const total = useSelector((state) => state.DoctorsReducer.Doctors.total);
  const loading = useSelector((state) => state.DoctorsReducer.loading);

  if (data?.last_page) pageCount = data.last_page;

  const getPage = (page) => {
    dispatch(getAllDoctors(page));
  };

  return [doctors, loading, pageCount, getPage, total];
};

export default DoctorsHook;
