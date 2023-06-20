import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAvailableDays } from "../../actions/Doctorsaction";

const AvailableDaysHook = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) dispatch(getAvailableDays(id));
  }, []);

  const loading = useSelector((state) => state.DoctorsReducer.loading);
  const availableDays = useSelector(
    (state) => state.DoctorsReducer.workingDays.data?.Days
  );

  return [availableDays, loading];
};

export default AvailableDaysHook;
