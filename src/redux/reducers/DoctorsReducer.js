import {
  GET_ALL_Doctors,
  GET_ONE_DOCTOR,
  CREATE_DOCTOR,
  GET_ERROR,
} from "../type";

const inital = {
  Doctors: [],
  oneDoctor: [],
  created: [],
  loading: true,
};
const DoctorsReducer = (state = inital, action) => {
  switch (action.type) {
    case GET_ALL_Doctors:
      return {
        ...state,
        Doctors: action.payload,
        loading: false,
      };

    case GET_ONE_DOCTOR:
      return {
        ...state,
        oneDoctor: action.payload,
        loading: false,
      };

    case CREATE_DOCTOR:
      return {
        ...state,
        created: action.payload,
        loading: false,
      };

    case GET_ERROR:
      return {
        loading: true,
        Doctors: action.payload,
      };
    default:
      return state;
  }
};
export default DoctorsReducer;
