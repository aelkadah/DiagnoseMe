import { ALL_SYMPTOMS, PREDICT_DISEASE } from "../type";
import useGetData from "../../Hook/useGetData";
import { useInsertData } from "../../Hook/useInsertData";

export const getAllSymptoms = (data) => async (dispatch) => {
  try {
    const response = await useGetData("/api/symptoms");

    dispatch({
      type: ALL_SYMPTOMS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: ALL_SYMPTOMS,
      payload: e.response,
    });
  }
};

export const predictDisease = (data) => async (dispatch) => {
  try {
    const response = await useInsertData("/api/disease/predict", data);

    dispatch({
      type: PREDICT_DISEASE,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: PREDICT_DISEASE,
      payload: e.response,
    });
  }
};
