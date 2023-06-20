import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSchedule } from "../../actions/Doctorsaction";

const ScheduleHook = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const id = JSON.parse(localStorage.getItem("userInfo"))?.id;

  const schedule = useSelector((state) => state.DoctorsReducer.schedule);

  useEffect(() => {
    if (id) dispatch(getSchedule());
  }, []);

  return [schedule, loading];
};

export default ScheduleHook;
