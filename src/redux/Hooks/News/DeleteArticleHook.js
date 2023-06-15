import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteArticle, getAllNews } from "./../../actions/NewsAction";
import notify from "./../../../Hook/useNotifaction";

const DeleteArticleHook = (article) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const res = useSelector((state) => state.NewsReducer.deleted);

  const handleDelete = async (e) => {
    e.persist();
    setLoading(true);
    await dispatch(deleteArticle(article.id));
    setLoading(false);
  };

  useEffect(() => {
    if (!loading) {
      if (res?.status == 200) {
        setLoading(true);
        dispatch(getAllNews());
        return notify("Article deleted successfully", "success");
      } else return notify("Somithing went wrong", "error");
    }
  }, [loading]);

  return [handleDelete];
};

export default DeleteArticleHook;
