import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllNews } from "./../../actions/NewsAction";

const NewsHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNews());
  }, []);

  let pageCount = 0;

  const news = useSelector((state) => state.NewsReducer.news);
  const loading = useSelector((state) => state.NewsReducer.loading);

  if (news?.last_page) pageCount = news.last_page;

  const getPage = (page) => {
    dispatch(getAllNews(page));
  };

  return [news, loading, pageCount, getPage];
};

export default NewsHook;
