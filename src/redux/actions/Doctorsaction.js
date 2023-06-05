import { GET_ALL_Doctors, GET_ONE_DOCTOR, GET_ERROR } from "../type";

import useGetData from "./../../Hook/useGetData";

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
