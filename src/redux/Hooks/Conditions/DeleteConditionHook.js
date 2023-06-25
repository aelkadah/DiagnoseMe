import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "./../../../Hook/useNotifaction";
import {
  deleteCondition,
  getAllConditions,
} from "../../actions/ConditionsAction";

const DeleteConditionHook = (condition) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [id, setID] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (condition) setID(condition?.id);
  }, []);

  const res = useSelector((state) => state.ConditionsReducer.deleted);

  const handleDelete = async (e) => {
    e.preventDefault();

    console.log(id);

    setLoading(true);
    await dispatch(deleteCondition(condition?.id));
    setLoading(false);
  };

  useEffect(() => {
    if (!loading)
      if (res) {
        dispatch(getAllConditions());
        if (res?.status == 200) {
          notify("Condition deleted successfully", "success");
          return navigate("/dashboard/conditions");
        } else return notify("Something went wrong!", "error");
      }
  }, [loading]);

  return [handleDelete, loading];
};

export default DeleteConditionHook;
