import {
  CREATE_ARTICLE,
  DELETE_ARTICLE,
  GET_ALL_NEWS,
  GET_ERROR,
  GET_ONE_ARTICLE,
} from "../type";

const inital = {
  news: [],
  oneArticle: [],
  created: [],
  deleted: null,
  loading: true,
};

const NewsReducer = (state = inital, action) => {
  switch (action.type) {
    case GET_ALL_NEWS:
      return {
        ...state,
        news: action.payload,
        loading: false,
      };

    case GET_ONE_ARTICLE:
      return {
        ...state,
        oneArticle: action.payload,
        loading: false,
      };

    case CREATE_ARTICLE:
      return {
        ...state,
        created: action.payload,
        loading: false,
      };

    case DELETE_ARTICLE:
      return {
        ...state,
        deleted: action.payload,
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
export default NewsReducer;
