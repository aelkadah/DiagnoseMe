import { ALL_SYMPTOMS, PREDICT_DISEASE } from "../type";

const inital = {
  symptoms: [],
  predicted: [],
  loading: true,
};

const CheckupReducer = (state = inital, action) => {
  switch (action.type) {
    case ALL_SYMPTOMS:
      return {
        ...state,
        symptoms: action.payload,
        loading: false,
      };

    case PREDICT_DISEASE:
      return {
        ...state,
        predicted: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default CheckupReducer;
