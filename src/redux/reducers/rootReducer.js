import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import DoctorsReducer from "./DoctorsReducer";
import ServicesReducer from "./ServicesReducer";

export default combineReducers({
  authReducer: authReducer,
  DoctorsReducer: DoctorsReducer,
  ServicesReducer: ServicesReducer,
});
