import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const NewsHook = () => {
  const dispatch = useDispatch();
  //when first load
  useEffect(() => {
    dispatch(getAllNews());
  }, []);

  let pageCount = 0;

  //to get state from redux
  //   const data = useSelector((state) => state.DoctorsReducer.Doctors);
  //   const news = useSelector((state) => state.DoctorsReducer.Doctors.data);
  //   const total = useSelector((state) => state.DoctorsReducer.Doctors.total);
  //   const loading = useSelector((state) => state.DoctorsReducer.loading);

  //   if (data?.last_page) pageCount = data.last_page;

  const getPage = (page) => {
    dispatch(getAllNews(page));
  };

  return [news, loading, pageCount, getPage];
};

export default NewsHook;
