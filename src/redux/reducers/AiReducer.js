import { ALZHEIMER_CHECK } from "../type";

const inital = {
  alzheimer: [],
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

    default:
      return state;
  }
};
export default AiReducer;
