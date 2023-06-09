import {
  GET_ALL_Doctors,
  GET_ONE_DOCTOR,
  CREATE_DOCTOR,
  GET_ERROR,
  DELETE_DOCTOR,
  CHANGE_AVAILABLE_DAYS,
  MAKE_RESERVATION,
  GET_WORKING_DAYS,
  GET_SCHEDULE,
} from "../type";

const inital = {
  Doctors: [],
  oneDoctor: [],
  created: [],
  schedule: [],
  workingDays: [],
  availableDays: [],
  reservation: [],
  deleted: null,
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

    case DELETE_DOCTOR:
      return {
        ...state,
        deleted: action.payload,
        loading: false,
      };

    case GET_SCHEDULE:
      return {
        ...state,
        schedule: action.payload,
        loading: false,
      };

    case CHANGE_AVAILABLE_DAYS:
      return {
        ...state,
        availableDays: action.payload,
        loading: false,
      };

    case GET_WORKING_DAYS:
      return {
        ...state,
        workingDays: action.payload,
        loading: false,
      };

    case MAKE_RESERVATION:
      return {
        ...state,
        reservation: action.payload,
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
