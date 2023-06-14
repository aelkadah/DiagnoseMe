import {
  CREATE_CONDITION,
  DELETE_CONDITION,
  GET_ALL_CONDITIONS,
  GET_ERROR,
  GET_ONE_CONDITION,
} from "../type";

const inital = {
  conditions: [],
  oneCondition: [],
  created: [],
  deleted: null,
  loading: true,
};

const ConditionsReducer = (state = inital, action) => {
  switch (action.type) {
    case GET_ALL_CONDITIONS:
      return {
        ...state,
        conditions: action.payload,
        loading: false,
      };

    case GET_ONE_CONDITION:
      return {
        ...state,
        oneCondition: action.payload,
        loading: false,
      };

    case CREATE_CONDITION:
      return {
        ...state,
        created: action.payload,
        loading: false,
      };

    case DELETE_CONDITION:
      return {
        ...state,
        deleted: action.payload,
        loading: false,
      };

    case GET_ERROR:
      return {
        loading: true,
        conditions: action.payload,
      };

    default:
      return state;
  }
};
export default ConditionsReducer;
