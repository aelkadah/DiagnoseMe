import { GET_ALL_Doctors, GET_ERROR } from "../type";

import useGetData from "./../../Hook/useGetData";

export const getAllDoctors = () => async (dispatch) => {
  try {
    const response = await useGetData(`/api/doctor`);

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
