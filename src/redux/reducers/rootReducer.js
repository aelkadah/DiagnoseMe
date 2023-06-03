import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import DoctorsReducer from "./DoctorsReducer";
export default combineReducers({
  authReducer: authReducer,
  DoctorsReducer: DoctorsReducer,
});
