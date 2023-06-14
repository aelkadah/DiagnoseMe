import {
  GET_ALL_CONDITIONS,
  CREATE_CONDITION,
  DELETE_CONDITION,
  GET_ERROR,
  GET_ONE_CONDITION,
} from "../type";
import useGetData from "../../Hook/useGetData";
import { useInsertDataWithImage } from "../../Hook/useInsertData";
import useDeleteData from "../../Hook/useDeleteData";

export const getAllConditions = (page) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/condition?page=${page}`);

    dispatch({
      type: GET_ALL_CONDITIONS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const getOneCondition = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/condition/${id}`);

    dispatch({
      type: GET_ONE_CONDITION,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const deleteCondition = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/condition/${id}`);

    dispatch({
      type: DELETE_CONDITION,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const createCondition = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(`/api/condition`, formData);
    dispatch({
      type: CREATE_CONDITION,
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
