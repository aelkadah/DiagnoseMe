import { ALZHEIMER_CHECK, GET_ERROR } from "./../type";
import useAlzheimer from "./../../Hook/useAlzheimer";

// export const checkAlzheimer = (formData) => async (dispatch) => {
//   try {
//     const response = await useAlzheimer("", formData);
//     dispatch({
//       type: ALZHEIMER_CHECK,
//       payload: response,
//       loading: true,
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_ERROR,
//       payload: "Error " + e,
//     });
//   }
// };

export const checkAlzheimer = (formData) => async (dispatch) => {
  try {
    const response = await useAlzheimer("", formData);
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
