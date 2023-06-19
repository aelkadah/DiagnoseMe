import {
  USER_REGISTER,
  USER_LOGIN,
  DOCTOR_REGISTER,
  GET_ERROR,
  DOCTOR_LOGIN,
} from "../type";
import {
  useInsertData,
  useInsertDataWithImage,
} from "../../Hook/useInsertData";

export const userRegister = (data) => async (dispatch) => {
  try {
    const response = await useInsertData("/api/user/register", data);

    dispatch({
      type: USER_REGISTER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: USER_REGISTER,
      payload: e.response,
    });
  }
};

export const userLogin = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/user/login`, data);
    dispatch({
      type: USER_LOGIN,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: USER_LOGIN,
      payload: e.response,
    });
  }
};

export const doctorRegister = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(
      `/api/doctor/register`,
      formData
    );
    dispatch({
      type: DOCTOR_REGISTER,
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

export const doctorLogin = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/doctor/login`, data);
    dispatch({
      type: DOCTOR_LOGIN,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: DOCTOR_LOGIN,
      payload: e.response,
    });
  }
};
