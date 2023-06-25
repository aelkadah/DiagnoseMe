import { PREMIUM_USER } from "../type";
import { useInsertDataWithToken } from "../../Hook/useInsertData";

export const upgradePremium = () => async (dispatch) => {
  try {
    const response = await useInsertDataWithToken("/api/Premium/change");

    dispatch({
      type: PREMIUM_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: PREMIUM_USER,
      payload: e.response,
    });
  }
};
