import {
  GET_ERROR,
  GET_ALL_SERVICES,
  DELETE_SERVICE,
  CREATE_SERVICE,
} from "../type";

const inital = {
  services: [],
  created: [],
  deleted: [],
  loading: true,
};

const ServicesReducer = (state = inital, action) => {
  switch (action.type) {
    case GET_ALL_SERVICES:
      return {
        ...state,
        services: action.payload,
        loading: false,
      };

    case DELETE_SERVICE:
      return {
        ...state,
        deleted: action.payload,
        loading: false,
      };

    case CREATE_SERVICE:
      return {
        ...state,
        created: action.payload,
        loading: false,
      };

    case GET_ERROR:
      return {
        loading: true,
        services: action.payload,
      };

    default:
      return state;
  }
};
export default ServicesReducer;
