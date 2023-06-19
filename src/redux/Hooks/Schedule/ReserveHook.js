import React, { useState } from "react";
import { getDay } from "date-fns";
import notify from "./../../../Hook/useNotifaction";

const ReserveHook = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let availableDays = [0, 2, 4, 5];

  const [choosenDate, setChoosenDate] = useState("");

  const [startDate, setStartDate] = useState(null);
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

    console.log(date);
  };

  const handleSubmit = async (e) => {
    e.persist();
    if (choosenDate == "") return notify("Please choose a date!", "warn");

    setShow(false);

    console.log("sumbit clicked");

    console.log(choosenDate);
    // console.log(date);
  };

  return [
    show,
    handleShow,
    handleClose,
    startDate,
    setStartDate,
    isWeekday,
    handleChooseDate,
    handleSubmit,
  ];
};

export default ReserveHook;
