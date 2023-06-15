import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneArticle } from "../../actions/NewsAction";

const ArticleHook = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneArticle(id));
  }, []);

  const loading = useSelector((state) => state.NewsReducer.loading);
  const article = useSelector((state) => state.NewsReducer.oneArticle);

  return [article, loading];
};

export default ArticleHook;
