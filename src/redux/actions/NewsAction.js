import {
  GET_ERROR,
  GET_ALL_NEWS,
  CREATE_ARTICLE,
  DELETE_ARTICLE,
} from "../type";
import useDeleteData from "../../Hook/useDeleteData";
import useGetData from "../../Hook/useGetData";
import { useInsertDataWithImage } from "../../Hook/useInsertData";

export const getAllNews = (page) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/news?page=${page}`);

    dispatch({
      type: GET_ALL_NEWS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const deleteArticle = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/news/${id}`);

    dispatch({
      type: DELETE_ARTICLE,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const createArticle = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(`/api/news`, formData);
    dispatch({
      type: CREATE_ARTICLE,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
