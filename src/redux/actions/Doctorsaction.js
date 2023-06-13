import useGetData from "./../../Hook/useGetData";
import { useInsertDataWithImage } from "../../Hook/useInsertData";
import useDeleteData from "../../Hook/useDeleteData";
import {
  GET_ALL_Doctors,
  GET_ONE_DOCTOR,
  GET_ERROR,
  CREATE_DOCTOR,
  DELETE_DOCTOR,
} from "../type";

export const getAllDoctors = (page) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/doctor?page=${page}`);

    dispatch({
      type: GET_ALL_Doctors,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const getOneDoctor = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/doctor/${id}`);

    dispatch({
      type: GET_ONE_DOCTOR,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const createDoctor = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(
      `/api/doctor/store`,
      formData
    );
    dispatch({
      type: CREATE_DOCTOR,
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

export const deleteDoctor = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/doctor/${id}`);
    dispatch({
      type: DELETE_DOCTOR,
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
