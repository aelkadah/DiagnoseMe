import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneCondition } from "../../actions/ConditionsAction";

const ConditionDetailsHook = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneCondition(id));
  }, []);

  const loading = useSelector((state) => state.ConditionsReducer.loading);
  const condition = useSelector(
    (state) => state.ConditionsReducer.oneCondition
  );

  return [condition, loading];
};

export default ConditionDetailsHook;
