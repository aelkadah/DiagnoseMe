import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { upgradePremium } from "../../actions/PremiumAction";
import notify from "../../../Hook/useNotifaction";

const PremiumHook = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const handleUpgrade = async (e) => {
    // e.preventDefault();

    setLoading(true);
    await dispatch(upgradePremium());
    setLoading(false);

    // console.log(res);
    notify("Payment successfully done", "success");
  };

  return [handleUpgrade, loading];
};

export default PremiumHook;
