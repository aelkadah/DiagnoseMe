import { GET_ALL_Doctors, GET_ERROR } from "../type";

const inital = {
  Doctors: [],
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
