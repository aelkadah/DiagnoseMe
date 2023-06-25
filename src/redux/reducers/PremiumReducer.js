import { PREMIUM_USER } from "../type";

const inital = {
  upgrade: [],
  loading: true,
};

const PremiumReducer = (state = inital, action) => {
  switch (action.type) {
    case PREMIUM_USER:
      return {
        ...state,
        upgrade: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default PremiumReducer;
