import { ALZHEIMER_CHECK, DIABETES_CHECK, GET_ERROR } from "./../type";
import useAlzheimer from "./../../Hook/useAlzheimer";
import useDiabetes from "../../Hook/useDiabetes";

export const checkAlzheimer = (formData) => async (dispatch) => {
  try {
    const response = await useAlzheimer(formData);
    dispatch({
      type: ALZHEIMER_CHECK,
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

export const checkDiabetes = (data) => async (dispatch) => {
  try {
    const response = await useDiabetes(
      `/?gender=${data?.gender}&age=${data?.age}&hypertension=${data?.hypertension}&heart_disease=${data?.heart_disease}&bmi=${data?.bmi}&HbA1c_level=${data?.HbA1c_level}&blood_glucose_level=${data?.blood_glucose_level}`
    );

    dispatch({
      type: DIABETES_CHECK,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: DIABETES_CHECK,
      payload: e.response,
    });
  }
};
