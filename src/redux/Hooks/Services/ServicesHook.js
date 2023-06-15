import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllServices } from "../../actions/ServicesAction";

const ServicesHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServices());
  }, []);

  let pageCount = 0;

  const services = useSelector((state) => state.ServicesReducer.services);
  const loading = useSelector((state) => state.ServicesReducer.loading);

  if (services?.last_page) pageCount = services.last_page;

  const getPage = (page) => {
    dispatch(getAllServices(page));
  };

  return [services, loading, pageCount, getPage];
};

export default ServicesHook;
