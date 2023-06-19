import {
  USER_REGISTER,
  USER_LOGIN,
  DOCTOR_REGISTER,
  DOCTOR_LOGIN,
} from "../type";

const inital = {
  registered: [],
  loggedin: [],
  registeredDoc: [],
  loggedinDoc: [],
  loading: true,
};
const authReducer = (state = inital, action) => {
  switch (action.type) {
    case USER_REGISTER:
      return {
        ...state,
        registered: action.payload,
      };

    case USER_LOGIN:
      return {
        ...state,
        loggedin: action.payload,
      };

    case DOCTOR_REGISTER:
      return {
        ...state,
        registeredDoc: action.payload,
      };

    case DOCTOR_LOGIN:
      return {
        ...state,
        loggedinDoc: action.payload,
      };

    default:
      return state;
  }
};
export default authReducer;
