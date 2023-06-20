import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeAvailableDays } from "../../actions/Doctorsaction";
import notify from "../../../Hook/useNotifaction";
import AvailableDaysHook from "./AvailableDaysHook";

const ChooseAvailableDaysHook = () => {
  let id = JSON.parse(localStorage.getItem("userInfo"))?.id;
  const [availableDays] = AvailableDaysHook(id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedDays, setSelectedDays] = useState([]);

  const [loading, setLoading] = useState(true);

  const [satVal, setSatVal] = useState(false);
  const [sunVal, setSunVal] = useState(false);
  const [monVal, setMonVal] = useState(false);
  const [tueVal, setTueVal] = useState(false);
  const [wedVal, setWedVal] = useState(false);
  const [thuVal, setThuVal] = useState(false);
  const [friVal, setFriVal] = useState(false);

  const res = useSelector((state) => state.DoctorsReducer.availableDays);

  useEffect(() => {
    if (availableDays) {
      if (availableDays?.includes(0)) setSunVal(true);
      if (availableDays?.includes(1)) setMonVal(true);
      if (availableDays?.includes(2)) setTueVal(true);
      if (availableDays?.includes(3)) setWedVal(true);
      if (availableDays?.includes(4)) setThuVal(true);
      if (availableDays?.includes(5)) setFriVal(true);
      if (availableDays?.includes(6)) setSatVal(true);
      else return;
    }
  }, [availableDays]);

  const onChangeSat = async (e) => await setSatVal(e.target.checked);
  const onChangeSun = async (e) => await setSunVal(e.target.checked);
  const onChangeMon = async (e) => await setMonVal(e.target.checked);
  const onChangeTue = async (e) => await setTueVal(e.target.checked);
  const onChangeWed = async (e) => await setWedVal(e.target.checked);
  const onChangeThu = async (e) => await setThuVal(e.target.checked);
  const onChangeFri = async (e) => await setFriVal(e.target.checked);

  const onSave = async (e) => {
    e.preventDefault();
    setSelectedDays([]);

    if (satVal == true) selectedDays.push(6);
    if (sunVal == true) selectedDays.push(0);
    if (monVal == true) selectedDays.push(1);
    if (tueVal == true) selectedDays.push(2);
    if (wedVal == true) selectedDays.push(3);
    if (thuVal == true) selectedDays.push(4);
    if (friVal == true) selectedDays.push(5);

    setLoading(true);
    await dispatch(
      changeAvailableDays({
        AvailableDays: selectedDays,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      if (res?.status == 200) {
        notify("Working days updated successfully", "success");
        return navigate("/dashboard");
      } else return notify("Something went wrong", "error");
    }
  }, [loading]);

  return [
    satVal,
    onChangeSat,
    sunVal,
    onChangeSun,
    monVal,
    onChangeMon,
    tueVal,
    onChangeTue,
    wedVal,
    onChangeWed,
    thuVal,
    onChangeThu,
    friVal,
    onChangeFri,
    onSave,
  ];
};

export default ChooseAvailableDaysHook;
