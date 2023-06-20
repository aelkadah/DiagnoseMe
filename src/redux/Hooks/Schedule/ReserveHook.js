import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDay, setHours, setMinutes } from "date-fns";
import notify from "./../../../Hook/useNotifaction";
import { makeReservation } from "../../actions/Doctorsaction";
import AvailableDaysHook from "../Doctor/AvailableDaysHook";

const ReserveHook = (id) => {
  const dispatch = useDispatch();

  const [availableDays] = AvailableDaysHook(id);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loading, setLoading] = useState(true);

  const res = useSelector((state) => state.DoctorsReducer.reservation);

  const [choosenDate, setChoosenDate] = useState("");
  const [choosenTime, setChoosenTime] = useState("");

  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 0)
  );

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  const isWeekday = (date) => {
    const day = getDay(date);
    return availableDays.includes(day);
  };

  const handleChooseDate = async (date) => {
    setStartDate(date);

    let tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds

    setChoosenDate(
      new Date(date - tzoffset).toISOString().slice(0, -1).split("T")[0]
    );

    setChoosenTime(
      JSON.stringify(date.toTimeString().split(" ")[0]).split('"')[1]
    );
  };

  const handleSubmit = async (e) => {
    e.persist();
    if (choosenDate == "") return notify("Please choose a date!", "warn");
    else if (choosenTime == "") return notify("Please choose a time!", "warn");

    setShow(false);

    setLoading(true);
    await dispatch(
      makeReservation({
        date: choosenDate,
        time: choosenTime,
        doctor_id: id,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      //   if (res) console.log(res);
      if (res?.status == 200)
        return notify("Reservation created successfully", "success");
      else if (res?.status == 403)
        return notify("Sorry time is reserved", "warn");
      else return notify("Something went wrong", "error");
    }
  }, [loading]);

  return [
    show,
    handleShow,
    handleClose,
    startDate,
    setStartDate,
    isWeekday,
    filterPassedTime,
    handleChooseDate,
    handleSubmit,
  ];
};

export default ReserveHook;
