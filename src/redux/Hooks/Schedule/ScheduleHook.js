// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSchedule } from "../../actions/Doctorsaction";
import notify from "../../../Hook/useNotifaction";

const ScheduleHook = () => {
  const dispatch = useDispatch();

  const id = JSON.parse(localStorage.getItem("userInfo"))?.id;

  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  let collected = [];

  useEffect(() => {
    const run = async () => {
      setLoading(true);
      await dispatch(getSchedule());
      setLoading(false);
    };

    if (id) run();
  }, []);

  const schedule = useSelector((state) => state.DoctorsReducer.schedule);

  useEffect(() => {
    if (!loading) {
      if (schedule?.status == 200) {
        schedule?.data?.data?.map((item) =>
          collected.push({
            title: `${item.user.first_name} ${item.user.last_name}`,
            allDay: false,
            start: `20${item?.date?.date.split("-")[1]}-${
              item.date.monthName
            }-${item.date.date.split("-")[0]}T${item.time}`,
            end: `20${item?.date?.date.split("-")[1]}-${item.date.monthName}-${
              item.date.date.split("-")[0]
            }T${item.time.split(":")[0]}:${
              Number(item.time.split(":")[1]) + 30
            }:00`,
          })
        );
        return setEvents(collected);
      } else return notify("Something went wrong!", "error");
    }
  }, [loading]);

  return [events, loading];
};

export default ScheduleHook;
