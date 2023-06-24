import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { predictDisease } from "./../../actions/CheckupAction";
import notify from "../../../Hook/useNotifaction";

const CheckupHook = (selected) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const run = async (e) => {};
    run();
  }, []);

  const predicted = useSelector((state) => state.CheckupReducer.predicted);

  const handleSelect = (e) => {
    if (e.target.checked == true) {
      selected.push(e.target.id);
      return;
    } else if (e.target.checked == false) {
      let array = selected.filter((item) => item !== e.target.id);
      selected = array;
      return;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    await dispatch(
      predictDisease({
        symptoms: selected,
      })
    );
    setLoading(false);

    handleShow();
  };

  const handleDone = async (e) => {
    e.preventDefault();

    await setTimeout(navigate("/"), 1000);
    handleClose();
  };

  useEffect(() => {
    if (!loading)
      if (predicted)
        if (predicted?.status == 200) {
          predicted?.data?.data?.map((item) => {
            if (item?.score != 0) {
              result.push(item);
            }
            return;
          });
        } else return notify("Something went wrong!", "error");
  }, [loading]);

  return [show, predicted, loading, handleSelect, handleSubmit, handleDone];
};

export default CheckupHook;
