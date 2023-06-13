import {
  GET_ALL_SERVICES,
  DELETE_SERVICE,
  GET_ERROR,
  CREATE_SERVICE,
} from "../type";
import useDeleteData from "../../Hook/useDeleteData";
import useGetData from "../../Hook/useGetData";
import { useInsertDataWithImage } from "../../Hook/useInsertData";

export const getAllServices = (page) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/services?page=${page}`);

    dispatch({
      type: GET_ALL_SERVICES,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const deleteService = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/services/${id}`);

    dispatch({
      type: DELETE_SERVICE,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const createService = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(`/api/services`, formData);
    dispatch({
      type: CREATE_SERVICE,
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
