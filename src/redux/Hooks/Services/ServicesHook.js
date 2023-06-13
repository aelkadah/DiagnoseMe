import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllServices } from "../../actions/ServicesAction";

const ServicesHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServices());
  }, []);

  const services = useSelector((state) => state.ServicesReducer.services);
  const loading = useSelector((state) => state.ServicesReducer.loading);

  return [services, loading];
};

export default ServicesHook;
