import { ALZHEIMER_CHECK, DIABETES_CHECK } from "../type";

const inital = {
  alzheimer: [],
  diabetes: [],
  loading: true,
};

const AiReducer = (state = inital, action) => {
  switch (action.type) {
    case ALZHEIMER_CHECK:
      return {
        ...state,
        alzheimer: action.payload,
        loading: false,
      };

    case DIABETES_CHECK:
      return {
        ...state,
        diabetes: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
export default AiReducer;
