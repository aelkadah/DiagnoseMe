import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllConditions } from "./../../actions/ConditionsAction";

const ConditionsHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllConditions());
  }, []);

  let pageCount = 0;

  const conditions = useSelector((state) => state.ConditionsReducer.conditions);
  const loading = useSelector((state) => state.ConditionsReducer.loading);

  if (conditions?.last_page) pageCount = conditions.last_page;

  const getPage = (page) => {
    dispatch(getAllConditions(page));
  };

  return [conditions, loading, pageCount, getPage];
};

export default ConditionsHook;
